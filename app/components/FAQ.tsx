"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Is the internship matching really guaranteed?",
      answer:
        "Yes, 100%! Zynkk bypasses traditional screening filters. When you opt into our internship program, you select your track (e.g., Frontend, UI/UX, Backend) and our system automatically matches you with a live group project and a dedicated tech mentor. No coding interviews, no rejections.",
    },
    {
      question: "Who is this internship program designed for?",
      answer:
        "Our platform is built for students, graduates, boot camp graduates, and self-taught developers or designers who need real-world experience. If you are struggling to land roles because your resume lacks team experience or professional project proof, Zynkk provides exactly that.",
    },
    {
      question: "What is the duration and weekly time commitment?",
      answer:
        "Standard internship cohorts run for 8 weeks. We offer flexible tracks: Part-time (10-20 hours/week) which is ideal for students or working professionals, and Full-time (30-40 hours/week) for candidates looking to accelerate their learning.",
    },
    {
      question: "What technologies and tracks are supported?",
      answer:
        "We currently support React & Next.js for Frontend; Node.js, Express, PostgreSQL, and Firebase for Backend; full-stack integration; UI/UX wireframing & prototyping in Figma; Data Science with Python & SQL; and Digital Growth Marketing.",
    },
    {
      question: "Do I get a certificate and recommendation letter?",
      answer:
        "Yes. Upon successful completion of your internship tasks and meeting the graduation guidelines, you will receive a cryptographically verifiable digital certificate to showcase on LinkedIn. You also receive a personalized letter of recommendation highlighting your contributions, alongside GitHub reference links.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#08080f] relative">
      <div className="absolute left-0 top-1/3 w-72 h-72 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
            Questions & Answers
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked Questions
          </p>
          <p className="text-zinc-400 mt-4 text-sm sm:text-base">
            Everything you need to know about the zynkk internship matching system.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="glass rounded-2xl overflow-hidden border border-white/5 transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-white">{faq.question}</span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[500px] opacity-100 border-t border-white/5" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-5 sm:p-6 text-sm text-zinc-400 leading-relaxed bg-[#050508]/40">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
