type LandingPageProps = {
  onLogin: () => void
}

const coreFeatures = [
  {
    title: "Built-in Syllabus Tracker",
    text: "Track ready-made chapters and topics without creating them manually.",
    icon: "📚",
  },
  {
    title: "Smart Study Planner",
    text: "Plan daily study tasks with subject, priority, duration, and status.",
    icon: "📅",
  },
  {
    title: "PYQ Practice",
    text: "Organize previous year question practice topic-wise.",
    icon: "π",
  },
  {
    title: "Mock Test Tracker",
    text: "Track scores, accuracy, weak areas, and improvement after every test.",
    icon: "📝",
  },
  {
    title: "Mistake Notebook",
    text: "Save mistakes and revise them before your next test.",
    icon: "⚠️",
  },
  {
    title: "Analytics Dashboard",
    text: "Understand progress, weak topics, completed topics, and study direction.",
    icon: "📊",
  },
  {
    title: "AI Tutor Coming Soon",
    text: "Future AI support for weak topics, revision, and mistake analysis.",
    icon: "🤖",
  },
  {
    title: "Study Material",
    text: "Keep notes, formulas, revision sheets, and resources organized.",
    icon: "📘",
  },
]

const problems = [
  "Syllabus tracking is scattered",
  "Daily study planning is inconsistent",
  "Weak topics are not clearly visible",
  "Mock test mistakes are forgotten",
  "PYQ practice is hard to organize",
  "Revision planning becomes confusing",
]

const solutions = [
  "Built-in syllabus tracker",
  "Daily study planner",
  "Topic-wise progress",
  "Weak topic tracking",
  "Mistake notebook",
  "Mock test analysis",
]

const exams = [
  "JEE",
  "NEET",
  "MHT-CET",
  "Boards",
  "CUET",
  "UPSC",
  "SSC",
  "Banking",
  "Railway",
  "NDA/CDS",
  "GATE",
  "CAT",
  "CLAT",
  "State PSC",
  "Custom Goal",
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
    answer:
      "No. Chapters and topics are already built into the syllabus tracker.",
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

function MiniProgressRow({
  subject,
  value,
}: {
  subject: string
  value: number
}) {
  return (
    <div className="mt-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-bold text-slate-300">{subject}</span>
        <span className="font-black text-blue-300">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-slate-800">
        <div
          className="h-2 rounded-full bg-blue-500"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

export default function LandingPage({ onLogin }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
            <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
           <img
  src="/study-sankalp-logo.png"
  alt="Study Sankalp logo"
  className="h-10 w-auto object-contain"
/>
          </div>

          <div className="hidden items-center gap-7 text-sm font-bold text-slate-300 lg:flex">
            <a href="#features" className="hover:text-white">
              Features
            </a>
            <a href="#exams" className="hover:text-white">
              Exams
            </a>
            <a href="#how-it-works" className="hover:text-white">
              How It Works
            </a>
            <a href="#ai" className="hover:text-white">
              AI Tutor
            </a>
            <a href="#pricing" className="hover:text-white">
              Pricing
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onLogin}
              className="hidden rounded-2xl border border-white/10 px-5 py-2.5 text-sm font-black text-slate-200 hover:bg-white/10 sm:block"
            >
              Login
            </button>
            <button
              onClick={onLogin}
              className="rounded-2xl bg-blue-600 px-5 py-2.5 text-sm font-black text-white shadow-xl shadow-blue-600/25 transition hover:bg-blue-500"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-10 top-32 -z-10 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm font-black text-blue-200">
              Built for serious exam preparation
            </div>

            <h1 className="text-5xl font-black tracking-tight md:text-7xl">
              With you at every stage of your preparation.
            </h1>
<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
  Plan smarter. Track every topic. Improve every test with a focused preparation
  workspace built for serious students.
</p>
           
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onLogin}
                className="rounded-2xl bg-blue-600 px-7 py-4 text-base font-black text-white shadow-2xl shadow-blue-600/25 transition hover:bg-blue-500"
              >
                Get Started Free
              </button>
              <a
                href="#features"
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-4 text-center text-base font-black text-white transition hover:bg-white/10"
              >
                View Features
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-black text-blue-300">5</p>
                <p className="mt-1 text-xs font-bold text-slate-400">
                  subject groups
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-black text-teal-300">100+</p>
                <p className="mt-1 text-xs font-bold text-slate-400">
                  chapters
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-black text-indigo-300">600+</p>
                <p className="mt-1 text-xs font-bold text-slate-400">
                  topics
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-blue-950/40 backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-slate-950 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-black text-blue-300">
                    Student Workspace
                  </p>
                  <h2 className="mt-1 text-2xl font-black">
                    Preparation Dashboard
                  </h2>
                </div>
                <span className="rounded-full bg-green-500/10 px-4 py-2 text-xs font-black text-green-300">
                  Free Plan
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs font-bold text-slate-400">
                    Overall Progress
                  </p>
                  <p className="mt-2 text-3xl font-black text-blue-300">64%</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs font-bold text-slate-400">
                    Weak Topics
                  </p>
                  <p className="mt-2 text-3xl font-black text-red-300">7</p>
                </div>
                <div className="rounded-2xl bg-white/5 p-4">
                  <p className="text-xs font-bold text-slate-400">
                    Today Plan
                  </p>
                  <p className="mt-2 text-3xl font-black text-teal-300">4h</p>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-white/5 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-black">Subject Progress</p>
                  <p className="text-xs font-bold text-slate-400">
                    JEE Syllabus
                  </p>
                </div>

                <MiniProgressRow subject="Physics" value={58} />
                <MiniProgressRow subject="Chemistry" value={71} />
                <MiniProgressRow subject="Mathematics" value={62} />
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-blue-500/10 p-4">
                  <p className="text-xs font-black text-blue-300">
                    Next Topic
                  </p>
                  <p className="mt-2 font-black">Laws of Motion</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Start with FBD and NLM applications
                  </p>
                </div>

                <div className="rounded-2xl bg-red-500/10 p-4">
                  <p className="text-xs font-black text-red-300">
                    Weak Area
                  </p>
                  <p className="mt-2 font-black">Organic Chemistry</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Add revision before next test
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-black text-red-300">The Problem</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Preparing is hard when everything is scattered.
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {problems.map((problem) => (
                  <div
                    key={problem}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm font-bold text-slate-300"
                  >
                    {problem}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-8">
              <p className="text-sm font-black text-blue-300">The Solution</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                One workspace for your complete exam preparation.
              </h2>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {solutions.map((solution) => (
                  <div
                    key={solution}
                    className="rounded-2xl border border-blue-300/10 bg-blue-950/40 p-4 text-sm font-bold text-blue-100"
                  >
                    {solution}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black text-blue-300">Core Features</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Everything a serious student needs to stay on track.
            </h2>
            <p className="mt-5 text-slate-300">
              Study Sankalp connects planning, syllabus tracking, revision, and
              test improvement in one clean system.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-xl">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-xl font-black">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="exams"
        className="border-y border-white/10 bg-white/[0.03] px-6 py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="font-black text-blue-300">Exam Support</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Made for every serious exam goal.
            </h2>
            <p className="mt-5 text-slate-300">
              Start with JEE preparation today. More exam-specific trackers can
              be added as the product grows.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {exams.map((exam) => (
              <span
                key={exam}
                className="rounded-full border border-white/10 bg-slate-900 px-5 py-3 text-sm font-black text-slate-200"
              >
                {exam}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black text-blue-300">How It Works</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              A simple system for daily preparation.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-black text-blue-300">
                  {step.number}
                </p>
                <h3 className="mt-4 text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
            <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="font-black text-blue-300">Product Preview</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                See your preparation clearly.
              </h2>
              <p className="mt-5 text-slate-300">
                Track progress, identify weak areas, and know what to study next
                without jumping between different notebooks and apps.
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
                  className="rounded-2xl border border-white/10 bg-slate-950 p-5"
                >
                  <p className="font-black">{item}</p>
                  <div className="mt-4 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-2/3 rounded-full bg-blue-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ai" className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-5 inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-black text-blue-200">
                Coming Soon
              </div>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                AI Tutor for smarter preparation.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                AI Tutor will help students understand weak topics, improve
                revision plans, analyze mistakes, and prepare with better focus.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950 p-6">
              {[
                "Weak topic explanation",
                "Smart revision plan",
                "Mistake analysis",
                "Practice suggestions",
                "Study schedule improvement",
              ].map((item) => (
                <div
                  key={item}
                  className="mb-3 rounded-2xl bg-white/5 p-4 text-sm font-bold text-slate-300 last:mb-0"
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
          <div className="max-w-3xl">
            <p className="font-black text-blue-300">Plans</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Start free. Grow with better tools.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-black text-green-300">Available</p>
              <h3 className="mt-3 text-3xl font-black">Free Plan</h3>
              <p className="mt-4 text-slate-300">
                Perfect for starting your preparation system.
              </p>
              <div className="mt-6 space-y-3 text-sm font-bold text-slate-300">
                <p>✓ Study Planner</p>
                <p>✓ Built-in Syllabus Tracker</p>
                <p>✓ Topic Progress</p>
                <p>✓ Basic Dashboard</p>
                <p>✓ Browser progress save</p>
              </div>
              <button
                onClick={onLogin}
                className="mt-8 rounded-2xl bg-blue-600 px-6 py-3 font-black text-white hover:bg-blue-500"
              >
                Start Free
              </button>
            </div>

            <div className="rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-8">
              <p className="text-sm font-black text-blue-300">Coming Later</p>
              <h3 className="mt-3 text-3xl font-black">Premium Plan</h3>
              <p className="mt-4 text-slate-300">
                Advanced tools for deeper analysis and AI support.
              </p>
              <div className="mt-6 space-y-3 text-sm font-bold text-slate-300">
                <p>✓ AI Tutor</p>
                <p>✓ Advanced Analytics</p>
                <p>✓ Cloud Sync</p>
                <p>✓ Smart Revision Suggestions</p>
                <p>✓ Personalized Study Insights</p>
              </div>
              <button
                disabled
                className="mt-8 rounded-2xl border border-white/10 px-6 py-3 font-black text-slate-400"
              >
                Coming Soon
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-black text-blue-300">FAQ</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Questions students may ask.
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-black">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="text-2xl font-black">Study Sankalp</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              With you at every stage of your preparation. Plan. Track.
              Progress.
            </p>
          </div>

          <div>
            <p className="font-black">Product</p>
            <div className="mt-3 space-y-2 text-sm text-slate-400">
              <p>Features</p>
              <p>Exams</p>
              <p>Dashboard</p>
              <p>AI Tutor</p>
            </div>
          </div>

          <div>
            <p className="font-black">Company</p>
            <div className="mt-3 space-y-2 text-sm text-slate-400">
              <p>About</p>
              <p>Contact</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}