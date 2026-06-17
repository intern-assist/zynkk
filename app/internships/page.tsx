"use client";

import { useEffect, useRef, useState } from "react";
import TransitionLink from "../components/TransitionLink";
import BorderGlow from "../components/BorderGlow";

// Define the Curriculums for each track
const TRACKS_DATA = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    tagline: "Build immersive, high-fidelity responsive user interfaces.",
    duration: "4 Weeks",
    commitment: "15-20 hrs/week",
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    outcome: "Certificate in Advanced UI Engineering",
    modules: [
      {
        title: "Module 1: The Modern Next.js Stack",
        details: "Mastering App Router, React Server Components (RSC), Streaming, Suspense, and state transitions."
      },
      {
        title: "Module 2: Real-time Data & State",
        details: "Integrating Server Actions, Web Sockets, and highly responsive global states with optimism hooks."
      },
      {
        title: "Module 3: Pixel-Perfect Animations",
        details: "Building sleek, micro-interactive experiences using Tailwind and physics-based motion engines."
      },
      {
        title: "Module 4: Enterprise Simulation",
        details: "Integrating checkout gateways (Stripe), OAuth (Clerk/Auth.js), and deploying on serverless architectures."
      }
    ]
  },
  {
    id: "backend",
    title: "Backend Engineering",
    tagline: "Architect robust, secure APIs and scalable database systems.",
    duration: "4 Weeks",
    commitment: "15-20 hrs/week",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "Prisma", "AWS"],
    outcome: "Certificate in Distributed Backend Systems",
    modules: [
      {
        title: "Module 1: API Design & DB Relations",
        details: "Creating performant, documented RESTful and GraphQL endpoints, handling migration schema strategies with Prisma."
      },
      {
        title: "Module 2: Authentication & Security",
        details: "Implementing JWT, session stores, rate limiters, CORS, and encryption models to protect critical user assets."
      },
      {
        title: "Module 3: Caching & Message Queues",
        details: "Reducing latency using Redis caching policies and decoupling tasks using background worker queues."
      },
      {
        title: "Module 4: AWS Deployment & Monitoring",
        details: "Provisioning relational databases, deploying containerized apps, setting up cloud watchdogs and alerts."
      }
    ]
  },
  {
    id: "fullstack",
    title: "Fullstack Engineering",
    tagline: "Architect complete end-to-end web applications with databases and authentication.",
    duration: "4 Weeks",
    commitment: "20-25 hrs/week",
    stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "TailwindCSS", "NextAuth"],
    outcome: "Certificate in Full Stack Software Development",
    modules: [
      {
        title: "Module 1: Unified Next.js Architecture",
        details: "Mastering App Router layouts, Server Components rendering model, Server Actions data mutation, and Client Components state synchronization."
      },
      {
        title: "Module 2: DB Schemas & ORM Integrations",
        details: "Modeling database relations with Prisma ORM, setting up PostgreSQL transactions, connection pooling, and optimistic UI updates."
      },
      {
        title: "Module 3: Authentication & Security",
        details: "Configuring NextAuth / Auth.js with multiple providers, session security, JWT verification, and middleware-based route protection."
      },
      {
        title: "Module 4: Cloud Infrastructure & Deployment",
        details: "Deploying full-stack serverless functions, database hosting, performance monitoring, and handling webhook payloads securely."
      }
    ]
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    tagline: "Design stunning digital products and layout frameworks.",
    duration: "4 Weeks",
    commitment: "12-15 hrs/week",
    stack: ["Figma", "Framer", "Design Systems", "Prototyping", "UX Research"],
    outcome: "Certificate in Premium Product Design",
    modules: [
      {
        title: "Module 1: Design Tokens & Typography",
        details: "Establishing scalable style guides, harmonized color palettes, responsive grids, and font scales."
      },
      {
        title: "Module 2: High-Fidelity Components",
        details: "Designing interactive states (hover, active, disabled) and complex layout behaviors in auto-layout."
      },
      {
        title: "Module 3: Interactive Prototypes",
        details: "Stitch together seamless user flows with variables, conditions, and micro-interactive transitions."
      },
      {
        title: "Module 4: Production Handoff",
        details: "Translating visuals into developer-ready tokens and assets, collaborating on QA for pixel precision."
      }
    ]
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    tagline: "Integrate intelligent models, OpenAI API pipelines, and vector search embeddings.",
    duration: "4 Weeks",
    commitment: "15-20 hrs/week",
    stack: ["Python", "OpenAI API", "Pinecone", "LangChain", "Vector DBs"],
    outcome: "Certificate in AI Systems Integration",
    modules: [
      {
        title: "Module 1: Prompt Engineering & API Architectures",
        details: "Structuring system instructions, streaming model completions, handling rate limits, and parsing JSON payloads securely."
      },
      {
        title: "Module 2: Vector Embeddings & Databases",
        details: "Generating semantic text embeddings, configuring vector storage in Pinecone, and building retrieval-augmented generation (RAG) flows."
      },
      {
        title: "Module 3: LangChain & Agent Workflows",
        details: "Orchestrating agents with tools, managing chat memory, chaining operations, and enabling model reasoning loops."
      },
      {
        title: "Module 4: Deployment & Scaling AI Services",
        details: "Caching common prompts, tracking token usage metrics, optimizing latency, and hosting serverless agent endpoints."
      }
    ]
  }
];

export default function InternshipsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeTab, setActiveTab] = useState("frontend");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeModule, setActiveModule] = useState<number>(0);

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

  const activeTrackData = TRACKS_DATA.find((t) => t.id === activeTab) || TRACKS_DATA[0];

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

      <div className="max-w-6xl mx-auto w-full relative z-10">

        {/* Technical Header Labels */}
        <div className="flex justify-center mb-16">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-slate-900 font-mono text-[13px] font-bold tracking-tight pb-2 border-b border-[#0C2A92]/30">
            <span>[F] Frontend</span>
            <span>[B] Backend</span>
            <span>[FS] Fullstack</span>
            <span>[D] Design</span>
            <span>[AI] AI & ML</span>
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center mt-12 mb-28 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#0C2A92]/30 bg-white text-[#0C2A92] text-[13px] font-bold mb-8 shadow-sm">
            Now accepting applications for Fall 2026
          </div>

          <h1 className="text-[38px] md:text-[56px] lg:text-[72px] font-bold tracking-tight text-slate-900 mb-6 leading-tight">
            Skip the Tutorials. <br />
            <span className="text-[#0C2A92]">Code in Production.</span>
          </h1>

          <p className="text-[20px] md:text-[22px] text-slate-700 font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
            Zynkk Academy simulates realistic enterprise environments. Master advanced web stacks, get high-fidelity code reviews, and launch your career.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <TransitionLink
              href="/apply"
              className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all shadow-lg inline-block"
            >
              Apply For Next Internship Drive
            </TransitionLink>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto border-y border-[#0C2A92]/20 py-8 text-slate-900">
            <div>
              <div className="text-[32px] font-bold font-mono text-[#0C2A92]">94%</div>
              <div className="text-[12px] text-slate-600 font-mono font-bold">[ PLACEMENT RATE ]</div>
            </div>
            <div>
              <div className="text-[32px] font-bold font-mono text-[#0C2A92]">$18k+</div>
              <div className="text-[12px] text-slate-600 font-mono font-bold">[ AVG SALARY RISE ]</div>
            </div>
            <div>
              <div className="text-[32px] font-bold font-mono text-[#0C2A92]">1:1</div>
              <div className="text-[12px] text-slate-600 font-mono font-bold">[ MENTOR RATIO ]</div>
            </div>
            <div>
              <div className="text-[32px] font-bold font-mono text-[#0C2A92]">100%</div>
              <div className="text-[12px] text-slate-600 font-mono font-bold">[ REMOTE FORMAT ]</div>
            </div>
          </div>
        </div>

        {/* Section 2: Simulator Feature Showcase */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight text-slate-900 mb-4">
              Designed to Build Career Confidence
            </h2>
            <p className="text-[17px] text-slate-600 max-w-xl mx-auto">
              Our high-fidelity simulator environment replicates real-world dev cycles, testing your skills under production-like demands.
            </p>
          </div>

          {/* Simulator Mockup Visual Card */}
          <div className="relative border border-[#0C2A92]/30 rounded-2xl p-[1px] bg-white shadow-xl">
            <div className="flex justify-between items-center border-b border-[#0C2A92]/20 p-4 bg-[#f8faff] rounded-t-2xl gap-2">
              <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0C2A92]/30 shrink-0"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0C2A92]/50 shrink-0"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#0C2A92]/80 shrink-0"></span>
                <span className="font-mono text-[11px] sm:text-[13px] text-slate-700 ml-1.5 sm:ml-3 font-bold truncate">zynkk-simulator-workspace.tsx</span>
              </div>
              <span className="font-mono text-[9px] sm:text-[11px] bg-[#f0f4ff] text-[#0C2A92] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded border border-[#0C2A92]/20 font-bold shrink-0">
                ACTIVE_TEST_SUITE
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-b-2xl overflow-hidden min-h-[420px]">

              {/* Sidebar File explorer */}
              <div className="lg:col-span-3 border-r border-[#0C2A92]/10 p-5 font-mono text-[12px] text-slate-600 hidden lg:block bg-[#f8faff]/50">
                <div className="font-bold text-[#0C2A92] mb-4 uppercase tracking-wider text-[10px]">Workspace Files</div>
                <div className="space-y-2">
                  <div className="text-emerald-700 flex items-center gap-1.5 cursor-pointer font-medium">
                    <span>✓</span> stripe-webhooks.ts
                  </div>
                  <div className="text-emerald-700 flex items-center gap-1.5 cursor-pointer font-medium">
                    <span>✓</span> schema.prisma
                  </div>
                  <div className="text-[#0C2A92] flex items-center gap-1.5 cursor-pointer bg-[#f0f4ff] p-1 rounded font-bold">
                    <span>⚡</span> route.ts [Current]
                  </div>
                  <div className="flex items-center gap-1.5 cursor-pointer hover:text-slate-900">
                    <span>📁</span> components/
                  </div>
                  <div className="flex items-center gap-1.5 cursor-pointer hover:text-slate-900 text-slate-400">
                    <span>📁</span> tests/
                  </div>
                </div>
              </div>

              {/* Code window */}
              <div className="lg:col-span-6 p-4 sm:p-6 overflow-x-auto font-mono text-[12px] sm:text-[13px] leading-relaxed border-b lg:border-b-0 lg:border-r border-[#0C2A92]/10 bg-slate-50/50 text-slate-700">
                <span className="text-[#0C2A92] font-semibold">export async function</span> <span className="text-indigo-700">POST</span>(req: Request) &#123;<br />
                {"  "}const body = await req.json();<br />
                {"  "}const signature = req.headers.get(<span className="text-emerald-700">"stripe-signature"</span>);<br /><br />
                {"  "}// Verify webhook signature authenticity<br />
                {"  "}const event = stripe.webhooks.<span className="text-indigo-700 font-semibold">constructEvent</span>(<br />
                {"    "}body, signature, process.env.STRIPE_WEBHOOK_SECRET<br />
                {"  "});<br /><br />
                {"  "}if (event.type === <span className="text-emerald-700">"checkout.session.completed"</span>) &#123;<br />
                {"    "}await db.user.update(&#123;<br />
                {"      "}where: &#123; id: event.data.object.metadata.userId &#125;,<br />
                {"      "}data: &#123; subscriptionStatus: <span className="text-emerald-700">"ACTIVE"</span> &#125;<br />
                {"    "}&#125;);<br />
                {"  "}&#125;<br />
                {"  "}return Response.<span className="text-indigo-700 font-semibold">json</span>(&#123; received: true &#125;);<br />
                &#125;
              </div>

              {/* Feedback widget */}
              <div className="lg:col-span-3 p-5 sm:p-6 flex flex-col justify-between bg-[#f8faff]">
                <div>
                  <h4 className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3">Live Simulation Panel</h4>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3.5 mb-4">
                    <p className="text-[13px] text-emerald-700 font-semibold mb-1 flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-emerald-600 rounded-full animate-ping"></span>
                      Compilation Successful
                    </p>
                    <p className="text-[12px] text-slate-600 leading-normal">
                      Local mock client received status code 200. Webhook correctly updated database records.
                    </p>
                  </div>

                  <div className="bg-white border border-[#0C2A92]/10 rounded-lg p-3 text-[12px] text-slate-600">
                    <div className="text-[#0C2A92] font-bold mb-1 font-mono text-[11px]">TASK REQUIREMENT</div>
                    Integrate a secure stripe checkout webhook validation routine, parsing headers safely.
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-[11px] text-slate-500 mb-1 font-bold font-mono">SIMULATION SCORE:</div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-slate-950 font-mono">98%</div>
                    <span className="text-[12px] text-emerald-600 font-bold">[ PASS ]</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section 3: Interactive Curriculum Tabs */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <span className="font-mono text-[#0C2A92] text-[13px] font-bold tracking-widest uppercase block mb-3">// program_tracks</span>
            <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight text-slate-900">Structured Domain Tracks</h2>
            <p className="text-[17px] text-slate-600 max-w-xl mx-auto mt-2">
              Select a specialty track and view the curriculum module roadmap designed for enterprise deployment.
            </p>
          </div>

          {/* Tabs Selector */}
          <div className="w-full overflow-x-auto no-scrollbar mb-10 border-b border-[#0C2A92]/20">
            <div className="flex justify-start md:justify-center max-w-2xl mx-auto px-4 gap-2 md:gap-6 min-w-[580px] md:min-w-0">
              {TRACKS_DATA.map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setActiveTab(t.id);
                    setActiveModule(0);
                  }}
                  className={`flex-1 py-4 text-center font-mono text-[13px] md:text-[14px] font-bold border-b-2 transition-all cursor-pointer -mb-[2px] ${activeTab === t.id
                    ? "border-[#0C2A92] text-[#0C2A92]"
                    : "border-transparent text-slate-500 hover:text-slate-900"
                    }`}
                >
                  {t.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Track Details Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white border border-[#0C2A92]/20 rounded-2xl p-5 sm:p-8 lg:p-12 shadow-lg">

            {/* Left overview */}
            <div className="lg:col-span-5 flex flex-col justify-between pb-8 lg:pb-0 border-b lg:border-b-0 border-[#0C2A92]/10 lg:pr-4">
              <div>
                <span className="text-[12px] font-mono bg-[#f0f4ff] border border-[#0C2A92]/20 text-[#0C2A92] px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                  {activeTrackData.duration} • {activeTrackData.commitment}
                </span>

                <h3 className="text-[24px] md:text-[28px] font-bold text-slate-900 mt-6 mb-3">
                  {activeTrackData.title}
                </h3>

                <p className="text-[15px] md:text-[16px] text-slate-600 font-medium leading-relaxed mb-6">
                  {activeTrackData.tagline}
                </p>

                <div className="mb-6">
                  <div className="text-[11px] md:text-[12px] font-mono text-slate-500 uppercase tracking-widest mb-3 font-bold">Key Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {activeTrackData.stack.map((s) => (
                      <span key={s} className="bg-slate-50 border border-[#0C2A92]/10 text-slate-700 px-3 py-1 rounded-md text-[13px] font-mono font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#0C2A92]/10">
                <div className="text-[12px] font-mono text-slate-500 uppercase mb-1 font-bold">Graduation Outcome:</div>
                <div className="text-[15px] text-[#0C2A92] font-bold">{activeTrackData.outcome}</div>
              </div>
            </div>

            {/* Right module timeline */}
            <div className="lg:col-span-7 space-y-6 pt-4 lg:pt-0">
              <h4 className="text-[12px] font-mono text-slate-500 uppercase tracking-wider mb-2 font-bold">[ ROADMAP_MODULES ]</h4>
              <div className="space-y-4">
                {activeTrackData.modules.map((m, index) => {
                  const isOpen = activeModule === index;
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveModule(isOpen ? -1 : index)}
                      className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer group ${
                        isOpen
                          ? "border-[#0C2A92]/30 bg-[#f8faff]"
                          : "border-[#0C2A92]/10 bg-[#f8faff]/40 hover:bg-[#f8faff]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4 select-none">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-[14px] font-bold shrink-0 transition-colors ${
                            isOpen ? "bg-[#0C2A92] text-white" : "bg-[#f0f4ff] border border-[#0C2A92]/20 text-[#0C2A92]"
                          }`}>
                            0{index + 1}
                          </div>
                          <h5 className="font-bold text-slate-900 text-[15px]">{m.title}</h5>
                        </div>
                        <span className={`transform transition-all duration-300 text-slate-400 text-xs shrink-0 group-hover:scale-110 group-hover:text-[#0C2A92] ${isOpen ? "rotate-180" : ""}`}>
                          ▼
                        </span>
                      </div>
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-40 opacity-100 mt-3 pl-11" : "max-h-0 opacity-0"
                      }`}>
                        <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
                          {m.details}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Section 4: Key Pillars (Why Us?) */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight text-slate-900">
              An Experience Built to Inspire
            </h2>
            <p className="text-[17px] text-slate-600 max-w-xl mx-auto mt-2">
              Here is how Zynkk transitions you from basic syntax tutorials to industry-grade production standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#0C2A92]/20 shadow-md rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center text-[#0C2A92] mb-6 border border-[#0C2A92]/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-[20px] font-bold text-slate-900 mb-3">Enterprise Sandboxing</h4>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                  Instead of disconnected exercises, write code in structured application simulation spaces with database relationships and live client dependencies.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#0C2A92]/20 shadow-md rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center text-[#0C2A92] mb-6 border border-[#0C2A92]/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h4 className="text-[20px] font-bold text-slate-900 mb-3">Rapid Code Reviews</h4>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                  Each pull request is evaluated programmatically with inline warnings and verified reviews, replicating modern enterprise engineering standards.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#0C2A92]/20 shadow-md rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-[#f0f4ff] rounded-xl flex items-center justify-center text-[#0C2A92] mb-6 border border-[#0C2A92]/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h4 className="text-[20px] font-bold text-slate-900 mb-3">On-Chain Certification</h4>
                <p className="text-[15px] text-slate-600 leading-relaxed font-medium">
                  Every graduate is granted a digitally signed and verifiable token certificate to link on LinkedIn, building absolute trust with future recruiters.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Student Placement Trust Showcase */}
        <div className="mb-32">
          <div className="bg-white border border-[#0C2A92]/20 rounded-2xl shadow-lg p-6 sm:p-10 flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/3">
              <span className="font-mono text-[#0C2A92] text-[12px] font-bold uppercase tracking-wider block mb-2">// industry_alignment</span>
              <h3 className="text-[24px] md:text-[26px] font-bold text-slate-900 tracking-tight">Compatible with Modern Engineering Standards</h3>
              <p className="text-[14px] text-slate-600 mt-2 leading-relaxed font-medium">
                We train our academy developers on the exact codebase patterns, CI/CD pipelines, testing frameworks, and lint rules utilized by elite product engineering teams.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 opacity-75 text-slate-800">
              {/* Figma SVG */}
              <div className="flex items-center justify-center gap-2 select-none font-bold">
                <svg className="w-6 h-9 text-[#0C2A92]" viewBox="0 0 38 57" fill="currentColor">
                  <path d="M19 0H9.5C4.253 0 0 4.253 0 9.5C0 14.747 4.253 19 9.5 19H19V0Z" fill="#F24E1E"/>
                  <path d="M19 19H9.5C4.253 19 0 23.253 0 28.5C0 33.747 4.253 38 9.5 38H19V19Z" fill="#A259FF"/>
                  <path d="M19 38H9.5C4.253 38 0 42.253 0 47.5C0 52.747 4.253 57 9.5 57C14.747 57 19 52.747 19 47.5V38Z" fill="#0ACF83"/>
                  <path d="M28.5 38C33.747 38 38 33.747 38 28.5C38 23.253 33.747 19 28.5 19H19V38H28.5Z" fill="#1ABC9C"/>
                  <path d="M28.5 0C33.747 0 38 4.253 38 9.5C38 14.747 33.747 19 28.5 19H19V0H28.5Z" fill="#FF7262"/>
                </svg>
                <span className="text-[17px] font-sans tracking-tight ml-1">Figma</span>
              </div>
              {/* Vercel SVG */}
              <div className="flex items-center justify-center gap-2 select-none font-bold">
                <svg className="w-7 h-7 text-black" viewBox="0 0 115.5 100" fill="currentColor">
                  <polygon points="57.75,0 115.5,100 0,100" />
                </svg>
                <span className="text-[17px] font-sans tracking-tight">Vercel</span>
              </div>
              {/* GitHub SVG */}
              <div className="flex items-center justify-center gap-2 select-none font-bold">
                <svg className="w-7 h-7 text-black" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span className="text-[17px] font-sans tracking-tight ml-1">GitHub</span>
              </div>
              {/* Stripe SVG */}
              <div className="flex items-center justify-center gap-2 select-none font-bold">
                <svg className="w-8 h-8 text-[#635BFF]" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M22.8 14.5c0-1.8-1.4-2.7-3.7-2.7-2.6 0-4.8.9-6.4 1.9l-1.3-3.2c1.9-1.2 4.7-2.1 8-2.1 6.1 0 10.1 3.1 10.1 8.8 0 6.6-4.9 8.2-9 9.3-2.6.7-4.1 1.3-4.1 2.5 0 1.1 1.2 1.8 3.1 1.8 2.8 0 5.4-1 7.2-2.3l1.3 3.1c-2 1.6-5.4 2.6-8.9 2.6-5.8 0-9.6-3.1-9.6-8.4 0-6.2 5.1-8.2 9.1-9.3 2.9-.8 4.2-1.3 4.2-2.9zm-9.3-11.8c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" />
                </svg>
                <span className="text-[17px] font-sans tracking-tight">Stripe</span>
              </div>
              {/* Next.js Text */}
              <div className="flex items-center justify-center gap-2 select-none font-bold">
                <span className="text-[20px] font-black font-sans tracking-tighter">N</span>
                <span className="text-[17px] font-sans tracking-tight">Next.js</span>
              </div>
              {/* Tailwind Logo style */}
              <div className="flex items-center justify-center gap-2 select-none font-bold">
                <svg className="w-8 h-5 text-cyan-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.87 1.4-8.168L.132 9.21l8.2-1.192L12 .587z"/>
                </svg>
                <span className="text-[17px] font-sans tracking-tight">Tailwind</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: Verified Certificate Preview */}
        <div className="mb-32 text-center max-w-4xl mx-auto">
          <h2 className="text-[36px] md:text-[44px] font-bold tracking-tight text-slate-900 mb-4">
            A Certificate with Real Verification Backing
          </h2>
          <p className="text-[17px] text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
            Each graduate is issued a verified digital credential token linking directly to their portfolio, proving they have built, debugged, and shipped production-ready workflows.
          </p>

          <div className="rounded-[20px] overflow-hidden shadow-2xl border border-[#0C2A92]/20 max-w-3xl mx-auto">
            <img src="/zaynab.png" alt="Zynkk Academy Verifiable Graduation Certificate Preview" className="w-full h-auto object-cover block" />
          </div>
          <p className="text-slate-500 text-[13px] mt-6 font-mono font-bold">* Clickable verification links are generated and hostable directly on LinkedIn profiles.</p>
        </div>

        {/* Section 7: Detailed Accordion FAQ */}
        <div className="mb-32 max-w-3xl mx-auto">
          <h2 className="text-[36px] font-bold tracking-tight text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
          <div className="border-t border-[#0C2A92]/20 flex flex-col">
            {[
              {
                q: "Is there any cost to join Zynkk Academy?",
                a: "Access to our simulated tasks and curriculum sandbox is completely free. We charge a nominal fee strictly for generating and verifying your final graduation certificate token once you complete the coursework."
              },
              {
                q: "What is the expected weekly time commitment?",
                a: "Typically 15 to 20 hours per week depending on the track. Because the system is remote and completely web-based, you can complete tasks at your own pace and schedule."
              },
              {
                q: "Do I need prior coding experience?",
                a: "A basic understanding of Javascript/CSS is recommended. The sandbox guides you through core practices, but it is built to ramp students up to professional enterprise dev expectations quickly."
              },
              {
                q: "How does the certificate verification work?",
                a: "Every certificate contains a unique digital signature cryptographically verified by Zynkk servers. Clicking the link on your resume or LinkedIn profile redirects to our verified credential lookup directory, guaranteeing authentic completion."
              }
            ].map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="border-b border-[#0C2A92]/20">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between py-6 text-left text-[17px] md:text-[18px] font-bold text-slate-800 hover:text-[#0C2A92] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className={`transform transition-transform duration-300 text-slate-500 text-sm ${isOpen ? "rotate-180" : ""}`}>
                      ▼
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100 pb-6" : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="text-slate-600 text-[15px] leading-relaxed pr-6 font-medium">
                      {faq.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 8: Consistent Contact-style Blue CTA Card */}
        <div className="w-full bg-[#0C2A92] p-8 sm:p-12 md:p-16 shadow-2xl text-white rounded-2xl flex flex-col items-center text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/60 mb-6">
            Accelerate your path
          </p>
          <h2 className="text-[34px] md:text-[50px] font-bold text-white tracking-tight leading-tight mb-6">
            Ready to launch your career?
          </h2>
          <p className="text-white/70 text-[16px] md:text-[18px] max-w-xl mb-10 font-normal">
            Secure your slot in our upcoming Fall 2026 internship drive. Space is limited for supervised reviewer pipelines.
          </p>
          <TransitionLink
            href="/apply"
            className="border border-white/40 text-white text-[13px] font-bold tracking-widest uppercase px-10 py-4 rounded-full hover:bg-white hover:text-[#0C2A92] transition-all duration-300 inline-block"
          >
            Apply Now
          </TransitionLink>
        </div>

      </div>
    </main>
  );
}
