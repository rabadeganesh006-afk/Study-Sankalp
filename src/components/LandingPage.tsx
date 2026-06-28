import HowItWorksPage from "./HowItWorksPage"
import { useState } from "react"
type LandingPageProps = {
  onLogin: () => void
}

const coreFeatures = [
  {
    icon: "M 5 4 H 19 V 20 H 5 Z M 8 2 V 6 M 16 2 V 6 M 5 9 H 19",
    iconBg: "linear-gradient(135deg, #2563eb, #38bdf8)",
    tag: "Daily Planning",
    title: "Smart Study Planner",
    text: "Create daily study tasks with subject, duration, priority, and status so your preparation stays organized without keeping separate notes.",
    description:
      "Create daily study tasks with subject, duration, priority, and status so your preparation stays organized without keeping separate notes.",
  },
  {
    icon: "M 4 5 H 10 C 11 5 12 6 12 7 V 20 C 12 19 11 18 10 18 H 4 Z M 12 7 C 12 6 13 5 14 5 H 20 V 18 H 14 C 13 18 12 19 12 20",
    iconBg: "linear-gradient(135deg, #0f766e, #2dd4bf)",
    tag: "Syllabus",
    title: "Built-in Syllabus Tracker",
    text: "Track chapters and topics from a ready syllabus structure. Students can start tracking preparation without creating every topic manually.",
    description:
      "Track chapters and topics from a ready syllabus structure. Students can start tracking preparation without creating every topic manually.",
  },
  {
    icon: "M 4 19 H 20 M 6 16 L 10 12 L 13 14 L 18 8 M 18 8 H 20 V 10",
    iconBg: "linear-gradient(135deg, #16a34a, #86efac)",
    tag: "Progress",
    title: "Topic Progress System",
    text: "Mark topics as Learning, Revision, PYQ Done, Weak, or Completed so you always know what needs attention next.",
    description:
      "Mark topics as Learning, Revision, PYQ Done, Weak, or Completed so you always know what needs attention next.",
  },
  {
    icon: "M 6 3 H 15 L 20 8 V 21 H 6 Z M 15 3 V 8 H 20 M 9 13 H 16 M 9 17 H 17",
    iconBg: "linear-gradient(135deg, #7c3aed, #c084fc)",
    tag: "Practice",
    title: "PYQ Practice",
    text: "Plan previous year question practice subject-wise and chapter-wise so revision becomes closer to the real exam pattern.",
    description:
      "Plan previous year question practice subject-wise and chapter-wise so revision becomes closer to the real exam pattern.",
  },
  {
    icon: "M 12 3 L 20 12 L 12 21 L 4 12 Z M 12 8 L 16 12 L 12 16 L 8 12 Z M 12 11 H 12.01",
    iconBg: "linear-gradient(135deg, #ea580c, #facc15)",
    tag: "Tests",
    title: "Mock Test Tracker",
    text: "Record mock test scores, accuracy, weak areas, and improvement notes so every test gives a clear next step.",
    description:
      "Record mock test scores, accuracy, weak areas, and improvement notes so every test gives a clear next step.",
  },
  {
    icon: "M 12 3 L 22 21 H 2 Z M 12 9 V 14 M 12 17 H 12.01",
    iconBg: "linear-gradient(135deg, #dc2626, #fb7185)",
    tag: "Mistakes",
    title: "Mistake Notebook",
    text: "Save conceptual mistakes, calculation errors, silly mistakes, and weak topics in one place for focused revision before tests.",
    description:
      "Save conceptual mistakes, calculation errors, silly mistakes, and weak topics in one place for focused revision before tests.",
  },
  {
    icon: "M 5 19 V 10 M 12 19 V 5 M 19 19 V 8 M 4 19 H 20",
    iconBg: "linear-gradient(135deg, #0891b2, #67e8f9)",
    tag: "Analytics",
    title: "Analytics Dashboard",
    text: "View syllabus progress, subject progress, completed topics, weak topics, and study consistency from one clean dashboard.",
    description:
      "View syllabus progress, subject progress, completed topics, weak topics, and study consistency from one clean dashboard.",
  },
  {
    icon: "M 12 3 L 14 8 L 19 10 L 14 12 L 12 17 L 10 12 L 5 10 L 10 8 Z M 19 15 L 20 17 L 22 18 L 20 19 L 19 21 L 18 19 L 16 18 L 18 17 Z",
    iconBg: "linear-gradient(135deg, #4f46e5, #ec4899)",
    tag: "Coming Soon",
    title: "AI Tutor Coming Soon",
    text: "Future AI support will help students understand weak topics, plan revision, and get smarter study suggestions.",
    description:
      "Future AI support will help students understand weak topics, plan revision, and get smarter study suggestions.",
  },
]

const exams = [
  "IIT-JEE",
  "NEET UG",
  "NEET PG",
  "MHT-CET",
  "CUET",
  "GATE",
  "Polytechnic",
  "Class 9th to 12th",
  "Boards",
  "Olympiads",
  "ICSE Board",
  "School Curriculum",
  "SSC",
  "UPSC",
  "State PSC",
  "Defence",
  "NDA/CDS",
  "Railway",
  "Banking",
  "Government Bank Exams",
  "Judiciary",
  "Teaching",
  "Teacher Training",
  "UGC NET",
]

const steps = [
  {
    number: "01",
    title: "Choose your exam",
    text: "Start with your exam goal and preparation path.",
  },
  {
    number: "02",
    title: "Track chapters and topics",
    text: "Use built-in syllabus instead of creating chapters manually.",
  },
  {
    number: "03",
    title: "Plan daily study",
    text: "Create focused tasks with duration, subject, and priority.",
  },
  {
    number: "04",
    title: "Revise weak areas",
    text: "Mark difficult topics and improve through revision.",
  },
]

const faqs = [
  {
    question: "Is Study Sankalp free?",
    answer: "Yes. Study Sankalp starts with a free plan for students.",
  },
  {
    question: "Do I need to add chapters manually?",
    answer: "No. Chapters and topics are already built into the syllabus tracker.",
  },
  {
    question: "Can I track JEE syllabus?",
    answer: "Yes. The current tracker is focused on JEE-style preparation.",
  },
  {
    question: "Will my progress be saved?",
    answer:
      "Yes. Current progress is saved in your browser. Cloud sync will be added later.",
  },
  {
    question: "Is AI Tutor available now?",
    answer: "Not yet. AI Tutor is planned for a future phase.",
  },
  {
    question: "Can I use it for other exams?",
    answer:
      "Yes. Study Sankalp is planned for JEE, NEET, MHT-CET, Boards, CUET, and more.",
  },
]

function MiniProgressRow({ subject, value }: { subject: string; value: number }) {
  return (
    <div className="mt-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-bold text-slate-700">{subject}</span>
        <span className="font-black text-blue-700">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200">
        <div className="h-2 rounded-full bg-blue-600" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export default function LandingPage({ onLogin }: LandingPageProps) {
  const [landingView, setLandingView] = useState<"home" | "how-it-works">("home")

  if (landingView === "how-it-works") {
    return (
      <HowItWorksPage onBack={() => setLandingView("home")} onGetStarted={onLogin} />
    )
  }

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <img
            src="/study-sankalp-logo.png"
            alt="Study Sankalp logo"
            className="h-16 w-auto object-contain"
          />

          <div className="hidden items-center gap-9 text-sm font-black text-slate-800 lg:flex">
            <a href="#features" className="hover:text-blue-700">
              Features
            </a>
            <a href="#exams" className="hover:text-blue-700">
              Exams
            </a>
            <a
              href="#how-it-works"
              onClick={(event) => {
                event.preventDefault()
                setLandingView("how-it-works")
              }}
              className="hover:text-blue-700"
            >
              How It Works
            </a>
            <a href="#ai" className="hover:text-blue-700">
              AI Tutor
            </a>
            <a href="#pricing" className="hover:text-blue-700">
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onLogin}
              className="hidden rounded-2xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-black text-slate-900 shadow-sm hover:bg-slate-50 sm:block"
            >
              Login
            </button>
            <button
              onClick={onLogin}
              className="hidden rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-black text-slate-900 shadow-sm hover:bg-slate-50 sm:block"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 py-20 md:py-28">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative z-10">
            <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-black text-blue-700 shadow-sm">
              Built for serious exam preparation
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
              Plan smarter. <span className="text-blue-600">Track every topic.</span>{" "}
              Improve every test.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Study Sankalp helps students organize syllabus, daily study plans, weak
              topics, PYQs, mock tests, and mistakes in one focused preparation
              workspace.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onLogin}
                className="rounded-2xl bg-blue-600 px-7 py-4 text-base font-black text-white shadow-2xl shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Get Started Free
              </button>
              <a
                href="#features"
                className="rounded-2xl border border-slate-300 bg-white px-7 py-4 text-center text-base font-black text-slate-950 shadow-sm transition hover:bg-slate-50"
              >
                View Features
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-black text-blue-700">5</p>
                <p className="mt-1 text-xs font-bold text-slate-500">subject groups</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-black text-blue-700">100+</p>
                <p className="mt-1 text-xs font-bold text-slate-500">chapters</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-black text-blue-700">600+</p>
                <p className="mt-1 text-xs font-bold text-slate-500">topics</p>
              </div>
            </div>
          </div>

          <div className="relative z-10">
            <div className="absolute -left-5 top-8 hidden rounded-2xl border border-blue-100 bg-white px-4 py-3 text-sm font-black text-blue-700 shadow-xl md:block">
              Built-in Syllabus
            </div>

            <div className="absolute -right-4 top-28 hidden rounded-2xl border border-green-100 bg-white px-4 py-3 text-sm font-black text-green-700 shadow-xl md:block">
              Smart Planner
            </div>

            <div className="absolute -left-6 bottom-16 hidden rounded-2xl border border-red-100 bg-white px-4 py-3 text-sm font-black text-red-700 shadow-xl md:block">
              Weak Topics
            </div>

            <div className="rounded-[2.5rem] border border-slate-200 bg-white p-5 shadow-2xl shadow-blue-100">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-black text-blue-700">
                      Student Workspace
                    </p>
                    <h2 className="mt-2 text-3xl font-black text-slate-950">
                      Preparation Dashboard
                    </h2>
                    <p className="mt-2 text-sm font-semibold text-slate-500">
                      Track progress, plan study, and revise smarter.
                    </p>
                  </div>

                  <span className="rounded-full bg-green-50 px-4 py-2 text-xs font-black text-green-700">
                    Free Plan
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs font-bold text-slate-500">Overall Progress</p>
                    <p className="mt-2 text-3xl font-black text-blue-700">64%</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs font-bold text-slate-500">Weak Topics</p>
                    <p className="mt-2 text-3xl font-black text-red-600">7</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                    <p className="text-xs font-bold text-slate-500">Today Plan</p>
                    <p className="mt-2 text-3xl font-black text-teal-600">4h</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-sm font-black text-slate-950">
                      Subject Progress
                    </p>
                    <p className="text-xs font-bold text-slate-500">JEE Syllabus</p>
                  </div>

                  <MiniProgressRow subject="Physics" value={58} />
                  <MiniProgressRow subject="Chemistry" value={71} />
                  <MiniProgressRow subject="Mathematics" value={62} />
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
                    <p className="text-xs font-black text-blue-700">Next Topic</p>
                    <p className="mt-2 font-black text-slate-950">Laws of Motion</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Start with FBD and NLM applications
                    </p>
                  </div>

                  <div className="rounded-2xl border border-red-100 bg-red-50 p-4">
                    <p className="text-xs font-black text-red-700">Weak Area</p>
                    <p className="mt-2 font-black text-slate-950">Organic Chemistry</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Add revision before next test
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-5 flex max-w-md justify-center gap-2">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span className="h-2 w-2 rounded-full bg-blue-200" />
              <span className="h-2 w-2 rounded-full bg-blue-200" />
              <span className="h-2 w-2 rounded-full bg-blue-200" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black text-blue-700">Core Features</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Everything a serious student needs to stay on track.
            </h2>
            <p className="mt-5 text-slate-600">
              Study Sankalp connects planning, syllabus tracking, revision, and test
              improvement in one clean system.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg shadow-slate-200"
                  style={{ background: feature.iconBg }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-7 w-7 text-white"
                  >
                    <path d={feature.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="exams" className="border-y border-slate-200 bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-black text-blue-700">Exam Support</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Made for every serious exam goal.
            </h2>
            <p className="mt-5 text-slate-600">
              Choose your exam goal and use one focused workspace to plan study, track
              topics, revise weak areas, and review your test progress without scattered
              notes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {exams.map((exam) => (
              <span
                key={exam}
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-black text-slate-700 shadow-sm"
              >
                {exam}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black text-blue-700">How It Works</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              A simple system for daily preparation.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-black text-blue-700">{step.number}</p>
                <h3 className="mt-4 text-xl font-black text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-black text-blue-700">Product Preview</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                See your preparation clearly.
              </h2>
              <p className="mt-5 text-slate-600">
                Track progress, identify weak areas, and know what to study next without
                jumping between notebooks, apps, and random notes.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Overall Progress",
                "Subject Progress",
                "Weak Topics",
                "Today’s Study Plan",
                "Next Topics",
                "Mistake Review",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <p className="font-black text-slate-950">{item}</p>
                  <div className="mt-4 h-2 rounded-full bg-slate-200">
                    <div className="h-2 w-2/3 rounded-full bg-blue-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ai" className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-200 bg-blue-50 p-8 shadow-sm md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-black text-blue-700">
                Coming Soon
              </div>
              <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
                AI Tutor for smarter preparation.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                AI Tutor will help students understand weak topics, improve revision
                plans, analyze mistakes, and prepare with better focus.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              {[
                "Weak topic explanation",
                "Smart revision plan",
                "Mistake analysis",
                "Practice suggestions",
                "Study schedule improvement",
              ].map((item) => (
                <div
                  key={item}
                  className="mb-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold text-slate-700 last:mb-0"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-black text-blue-700">Free Plan</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
              Start free. Build your complete preparation system.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Study Sankalp starts free for students. Plan your study, track syllabus
              progress, revise weak topics, and grow with smarter tools as the product
              improves.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl rounded-[2.5rem] border border-blue-200 bg-gradient-to-br from-white via-blue-50 to-white p-6 shadow-2xl shadow-blue-100 md:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <div className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-black text-green-700">
                  Available Free
                </div>

                <h3 className="mt-5 text-4xl font-black text-slate-950 md:text-5xl">
                  Free Plan
                </h3>

                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Perfect for students who want a serious, organized, and focused
                  preparation workspace.
                </p>

                <div className="mt-7 rounded-3xl border border-blue-100 bg-white p-5 shadow-sm">
                  <p className="text-sm font-black text-blue-700">
                    Included in Free Plan
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    More advanced tools like AI Tutor, cloud sync, and smart analytics
                    will be added step by step.
                  </p>
                </div>

                <button
                  onClick={onLogin}
                  className="mt-8 rounded-2xl bg-blue-600 px-8 py-4 text-base font-black text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-700"
                >
                  Start Free
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  "Study Planner",
                  "Built-in Syllabus Tracker",
                  "Topic Progress",
                  "Basic Dashboard",
                  "Browser Progress Save",
                  "PYQ Practice",
                  "Mock Test Tracker",
                  "Mistake Notebook",
                  "Analytics Dashboard",
                  "AI Tutor Coming Soon",
                  "Cloud Sync Coming Soon",
                  "Smart Revision Suggestions",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-700">
                        ✓
                      </span>
                      <p className="text-sm font-black text-slate-800">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black text-blue-700">FAQ</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Questions students may ask.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-black text-slate-950">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <img
                src="/study-sankalp-logo.png"
                alt="Study Sankalp logo"
                className="h-14 w-auto object-contain"
              />

              <p className="mt-5 max-w-md text-base leading-7 text-slate-600">
                Study Sankalp helps students plan study, track syllabus progress, revise
                weak topics, and stay consistent throughout their preparation journey.
              </p>

              <div className="mt-8">
                <p className="text-lg font-black text-slate-950">Reach out to us</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Have questions about Study Sankalp? Contact support and get help with
                  your preparation workspace.
                </p>

                <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-black text-slate-800">
                  ✉️ studysankalp.support@gmail.com
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg font-black text-slate-950">Product</p>
              <div className="mt-5 space-y-3 text-base font-medium text-slate-600">
                <a href="#features" className="block hover:text-blue-700">
                  Features
                </a>
                <a href="#exams" className="block hover:text-blue-700">
                  Exams
                </a>
                <a
                  href="#how-it-works"
                  onClick={(event) => {
                    event.preventDefault()
                    setLandingView("how-it-works")
                  }}
                  className="block hover:text-blue-700"
                >
                  How It Works
                </a>
                <a href="#pricing" className="block hover:text-blue-700">
                  Free Plan
                </a>
                <a href="#ai" className="block hover:text-blue-700">
                  AI Tutor
                </a>
              </div>
            </div>

            <div>
              <p className="text-lg font-black text-slate-950">Study Tools</p>
              <div className="mt-5 space-y-3 text-base font-medium text-slate-600">
                <p>Study Planner</p>
                <p>Built-in Syllabus Tracker</p>
                <p>PYQ Practice</p>
                <p>Mock Test Tracker</p>
                <p>Mistake Notebook</p>
                <p>Analytics Dashboard</p>
              </div>
            </div>

            <div>
              <p className="text-lg font-black text-slate-950">Popular Goals</p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-base font-medium text-slate-600">
                <p>JEE</p>
                <p>NEET</p>
                <p>MHT-CET</p>
                <p>Boards</p>
                <p>CUET</p>
                <p>UPSC</p>
                <p>SSC</p>
                <p>Banking</p>
                <p>Railway</p>
                <p>NDA/CDS</p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-10 border-t border-slate-200 pt-10 lg:grid-cols-[1fr_1fr_1fr]">
            <div>
              <p className="text-lg font-black text-slate-950">Company</p>
              <div className="mt-5 space-y-3 text-base font-medium text-slate-600">
                <p>About</p>
                <p>Contact</p>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
              </div>
            </div>

            <div>
              <p className="text-lg font-black text-slate-950">Study Material</p>
              <div className="mt-5 space-y-3 text-base font-medium text-slate-600">
                <p>JEE Study Material</p>
                <p>Physics Formula Sheets</p>
                <p>Chemistry Revision Notes</p>
                <p>Mathematics Practice Tracker</p>
                <p>PYQ Practice Planner</p>
              </div>
            </div>

            <div>
              <p className="text-lg font-black text-slate-950">Student Promise</p>
              <p className="mt-5 max-w-sm text-base leading-7 text-slate-600">
                No fake claims. No unnecessary clutter. Study Sankalp is built to help
                serious students plan, track, and progress with clarity.
              </p>

              <button
                onClick={onLogin}
                className="mt-6 rounded-2xl bg-blue-600 px-6 py-3 font-black text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
              >
                Start Free
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="text-sm font-medium text-slate-500">
              © 2026 Study Sankalp. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-500">
              <p>Plan. Track. Progress.</p>
              <p>With you at every stage of your preparation.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
