import React from 'react';
import type { Metadata } from 'next';
import TransitionLink from '../components/TransitionLink';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Zynkk',
  description: 'Terms and Conditions for Zynkk project-based internship program.',
};

export default function TermsAndConditions() {
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
            <span>[T] Terms</span>
          </div>
        </div>

        <div className="text-center mt-4 mb-16 md:mb-24 max-w-2xl mx-auto px-2">
          <h1 className="text-[36px] sm:text-[56px] md:text-[72px] font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Terms and Conditions
          </h1>
          <p className="text-[17px] sm:text-[20px] text-slate-600 font-medium">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-12 text-[16px] leading-relaxed text-slate-700 font-medium max-w-3xl mx-auto">
          
          <section>
            <p>
              Please read these Terms and Conditions carefully before enrolling in or using any service offered by <strong className="text-slate-900 font-bold">Zynkk</strong>. By accessing our platform, submitting an application, or participating in any internship program, you acknowledge that you have read, understood, and agreed to be legally bound by the following terms. If you do not agree, please discontinue use of the platform immediately.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">01.</span> About Zynkk
            </h2>
            <p className="mb-4">
              Zynkk operates an immersive internship simulation workflow that provides project-based engineering environments to students. Our tracks span Frontend Development, Backend Development, Full Stack Development, and Mobile App Development.
            </p>
            <div className="p-5 rounded-[16px] border border-[#0C2A92]/20 bg-white shadow-sm text-slate-700 text-[15px]">
              <strong className="text-[#0C2A92] font-bold uppercase tracking-wider text-[13px] block mb-1">Important</strong> 
              Zynkk does NOT offer training, coaching, tutorials, video lectures, mentorship sessions, or any form of instructional guidance. Candidates are expected to independently apply their pre-existing technical skills to complete assigned real-world projects.
            </div>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">02.</span> Eligibility
            </h2>
            <p className="mb-4">To be eligible for our internship simulation workflow, candidates must:</p>
            <ul className="flex flex-col gap-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Be currently enrolled in an undergraduate or postgraduate engineering program, or be a recent graduate.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Possess foundational knowledge in their chosen domain (Frontend, Backend, Full Stack, or Mobile App Development).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Have access to a personal computer, stable internet connection, and relevant development environment.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Be able to commit to the selected internship duration without interruption.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Maintain an active GitHub or equivalent version control account to submit project work.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">03.</span> Simulation Structure
            </h2>
            <p className="mb-4">Upon successful enrollment, candidates will:</p>
            <ul className="flex flex-col gap-3 pl-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Receive a detailed project assignment brief specifying the scope, technical requirements, and deliverables.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Work independently to design, build, test, and submit the assigned project within the chosen duration.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Submit all project artifacts (source code, documentation, and repository link) before the deadline via the official submission portal.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Undergo a technical review by our engineering assessment team based on code quality, architecture, scalability, and adherence to requirements.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Receive a performance grade upon successful review, which determines credential eligibility.</span>
              </li>
            </ul>
            <p>
              Candidates are solely responsible for managing their time and completing deliverables independently. Extensions are not guaranteed and must be formally requested with valid justification.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">04.</span> No Training or Instruction Provided
            </h2>
            <p className="mb-4">
              Zynkk is strictly a project-based simulation facilitator. We do not provide any of the following:
            </p>
            <ul className="flex flex-col gap-3 pl-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Training videos, recorded lectures, or online courses.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Live or async mentorship, coaching sessions, or doubt-clearing calls.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Learning roadmaps, curated resources, or skill-building guidance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Technical support for debugging candidate code or explaining concepts.</span>
              </li>
            </ul>
            <p>
              By enrolling, candidates confirm that they possess sufficient pre-existing knowledge to independently complete the assigned project.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">05.</span> Certification Policy
            </h2>
            <ul className="flex flex-col gap-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Certificates of Internship are issued exclusively upon successful completion and technical review of the assigned project.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Upon successful completion and technical review, participants may optionally request a verified digital credential.</span>
              </li>
            </ul>
            
            <p className="mt-6 mb-4 font-bold text-slate-900">
              Verification and credential issuance: ₹199
            </p>
            <p className="mb-4 text-slate-700">
              This verification fee covers the following services:
            </p>
            <ul className="flex flex-col gap-3 pl-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span><strong className="text-slate-900 font-bold">Engineering review record:</strong> Formal documentation of code quality and technical rigor.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span><strong className="text-slate-900 font-bold">Credential generation:</strong> Performance-graded digital certificate mapped to your identity.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span><strong className="text-slate-900 font-bold">Unique verification ID:</strong> Cryptographically secure ID for authenticating your achievement.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span><strong className="text-slate-900 font-bold">Public verification page:</strong> A dedicated portal for employers to instantly validate your credentials.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span><strong className="text-slate-900 font-bold">Permanent digital credential:</strong> Lifetime hosting of your verified completion status on our ledger.</span>
              </li>
            </ul>

            <div className="p-5 rounded-[16px] border border-[#0C2A92]/20 bg-white shadow-sm text-slate-700 text-[15px]">
              <strong className="text-[#0C2A92] font-bold uppercase tracking-wider text-[13px] block mb-1">Important</strong> 
              Credentials will not be issued if a candidate's submission is found to contain plagiarized, AI-generated (without disclosure), or copied code.
            </div>
          </section>


          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">06.</span> Payments & Refund Policy
            </h2>
            <ul className="flex flex-col gap-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>All payments made towards internship enrollment and certificate issuance are strictly non-refundable, regardless of program completion status.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>The verification and credential issuance fee for any domain specialization is ₹199.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Payments must be completed in full before project credentials are issued.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Pricing is subject to revision at any time without prior notice. The fee applicable at the time of enrollment will apply.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>In the event that Zynkk discontinues a program, a pro-rated credit or refund may be issued at our sole discretion.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">07.</span> Code of Conduct
            </h2>
            <p className="mb-4">
              All participants are expected to conduct themselves professionally throughout the internship. The following behaviors will lead to immediate disqualification:
            </p>
            <ul className="flex flex-col gap-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Harassment, discrimination, or abusive communication directed at our team or other participants.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Attempting to gain unauthorized access to platform systems or other candidates' submissions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Providing false or misleading information during registration or submission.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Sharing confidential project briefs or internal platform content with third parties.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">08.</span> User Responsibilities
            </h2>
            <p className="mb-4">By using our platform, you agree to:</p>
            <ul className="flex flex-col gap-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Provide accurate, complete, and up-to-date personal and academic information.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Keep your account credentials secure and not share access with others.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Ensure all submitted project work is completed independently and within the specified timeline.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Report any technical issues or platform errors to our support team promptly.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">09.</span> Intellectual Property
            </h2>
            <p className="mb-4">
              All platform content including but not limited to branding, assessment briefs, UI/UX design, project templates, and documentation is the exclusive intellectual property of Zynkk. Reproduction, redistribution, or commercial use of any platform content without written consent is strictly prohibited.
            </p>
            <p>
              Project code you independently write and submit during the internship remains your intellectual property. However, by submitting it to our platform, you grant Zynkk a limited, non-exclusive license to review, assess, and retain your submission for internal quality benchmarking purposes.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">10.</span> Limitation of Liability
            </h2>
            <p className="mb-4">
              To the maximum extent permitted by applicable law, Zynkk shall not be held liable for:
            </p>
            <ul className="flex flex-col gap-3 pl-2">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Any indirect, incidental, special, or consequential damages.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Career outcomes, employment results, or job placements arising from participation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Loss of data, code, or submission artifacts due to technical failures.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Any third-party actions or decisions made based on your verified credentials.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">11.</span> Termination & Disqualification
            </h2>
            <p className="mb-4">
              Zynkk reserves the right to suspend or permanently terminate a candidate's participation and platform access under the following circumstances:
            </p>
            <ul className="flex flex-col gap-3 pl-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Violation of these Terms and Conditions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Detection of plagiarism or fraudulent submission.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Non-payment of applicable verification fees.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Abusive, disrespectful, or unprofessional conduct.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#0C2A92] shrink-0" />
                <span>Any activity that harms the reputation or operations of the platform.</span>
              </li>
            </ul>
            <p>
              No refund will be issued upon termination due to policy violations.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">12.</span> Dispute Resolution
            </h2>
            <p>
              In the event of a dispute arising from these Terms and Conditions or the internship workflow, both parties agree to first attempt resolution through good-faith communication with our support team. If unresolved within 30 days, the dispute shall be referred to binding arbitration under the laws of India. Both parties waive the right to a jury trial or class-action lawsuit.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">13.</span> Modifications to Terms
            </h2>
            <p>
              Zynkk reserves the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Continued use of the platform or active participation in an internship program after any update constitutes your acceptance of the revised terms. We recommend checking this page regularly.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">14.</span> Governing Law
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of India. Any legal proceedings arising under or related to these Terms shall be subject to the exclusive jurisdiction of the courts located in India.
            </p>
          </section>

          <section>
            <h2 className="text-[20px] font-bold text-slate-900 mb-4 tracking-tight flex items-center gap-3">
              <span className="text-[#0C2A92] font-mono text-[15px]">15.</span> Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions, concerns, or legal inquiries regarding these Terms and Conditions, please contact our team:
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
