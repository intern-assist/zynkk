import React from 'react';
import type { Metadata } from 'next';
import TransitionLink from '../components/TransitionLink';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zynkk',
  description: 'Privacy Policy for Zynkk project-based internship program.',
};

export default function PrivacyPolicy() {
  const lastUpdated = "July 23, 2026";

  return (
    <main className="relative w-full min-h-dvh flex flex-col font-sans pt-24 md:pt-32 pb-24 px-4 sm:px-6 overflow-x-hidden text-slate-900">
      
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-[100vh] -z-10 overflow-hidden bg-[#e6ebf5]">
        <video
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
            <span>[L] Legal</span>
            <span>[P] Privacy</span>
          </div>
        </div>

        <div className="text-center mt-4 mb-16 md:mb-24 max-w-2xl mx-auto px-2">
          <h1 className="text-[36px] sm:text-[56px] md:text-[72px] font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-[17px] sm:text-[20px] text-slate-600 font-medium">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-12 text-[16px] leading-relaxed text-slate-700 font-medium max-w-3xl mx-auto">
          
          <section>
            <p>
              At <strong className="text-slate-900 font-bold">Zynkk</strong>, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, process, and protect your information when you enroll in our project-based internship program.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">01.</span> Nature of Our Services
            </h2>
            <p className="mb-4">
              Zynkk operates an immersive <strong>internship simulation workflow</strong>. Rather than traditional EdTech tutorials, we provide a project-based environment that mirrors real-world enterprise engineering. Candidates are assigned to technical tracks (Frontend, Backend, Full Stack, or Mobile App Development) where they act as independent software apprentices, building and deploying production-grade applications.
            </p>
            <div className="p-5 rounded-[16px] border border-[#0C2A92]/20 bg-white shadow-sm text-slate-700 text-[15px]">
              <strong className="text-[#0C2A92] font-bold uppercase tracking-wider text-[13px] block mb-1">Important</strong> 
              Our workflow mirrors a true enterprise environment. Candidates are expected to bring their own foundational knowledge to the table to solve assigned architectural and coding challenges independently. There are no classes or training sessions. Upon successful completion and technical review, participants may optionally request a verified digital credential. Verification and credential issuance: ₹199.
            </div>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">02.</span> Information We Collect
            </h2>
            <p className="mb-4">To facilitate the internship program, code review, and certificate verification, we collect the following types of information:</p>
            <ul className="flex flex-col gap-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span><strong className="text-slate-900 font-bold">Personal Details:</strong> Name, email address, university or college name, and graduation timeline.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span><strong className="text-slate-900 font-bold">Technical Profiles:</strong> GitHub profile URLs, LinkedIn profile URLs, and repository details.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span><strong className="text-slate-900 font-bold">Project Artifacts:</strong> Submitted codebase, architecture diagrams, build logs, and pull request information for grading.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">03.</span> How We Use Your Data
            </h2>
            <p className="mb-4">We use the collected information for the following specific purposes:</p>
            <ul className="flex flex-col gap-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>To review, test, and grade your project submissions to ensure they meet technical benchmarks.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>To issue your performance-graded digital credential upon request.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>To publish verified certificate details on our ledger for future employers to verify your credentials.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>To communicate program status, project reviews, and administration updates.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">04.</span> Repository & Code Ownership
            </h2>
            <p>
              As an independent apprentice, you write and submit code hosted in your personal repositories (such as GitHub). While we analyze your code for review and validation purposes, we respect your intellectual property rights in the projects you build, subject to terms specified in your internship contract.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">05.</span> Data Sharing & Third-Party Disclosure
            </h2>
            <ul className="flex flex-col gap-4 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <div>
                  <strong className="text-slate-900 font-bold block mb-1">No Selling of Data</strong>
                  We do not sell, rent, or lease your personal information to third parties.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <div>
                  <strong className="text-slate-900 font-bold block mb-1">Credential Verification</strong>
                  For credential integrity, we provide a public verification portal. Anyone possessing your unique Certificate ID can verify its validity, the domain (Frontend, Backend, etc.), duration, and your final performance grade.
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">06.</span> Data Security
            </h2>
            <p>
              We implement standard security measures to secure your personal information and project data. We restrict internal database access to authorized reviewers and administrators involved in certificate issuance and project assessment.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">07.</span> Contact Information
            </h2>
            <p className="mb-6">
              If you have any questions, concerns, or data requests regarding this Privacy Policy, please contact our registry office:
            </p>
            <a href="mailto:zynkk.org@gmail.com" className="group inline-flex items-center gap-4 p-5 rounded-[16px] border border-[#0C2A92]/20 bg-white shadow-sm hover:shadow-md hover:border-[#0C2A92]/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#0C2A92] flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[12px] uppercase tracking-widest text-[#0C2A92] font-bold mb-1">Email Registry</span>
                <span className="text-slate-900 font-bold">zynkk.org@gmail.com</span>
              </div>
            </a>
          </section>

        </div>
      </div>
    </main>
  );
}
