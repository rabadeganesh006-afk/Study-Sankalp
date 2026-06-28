type HowItWorksPageProps = {
  onBack: () => void
  onGetStarted: () => void
}

const tableOfContents = [
  { label: "Overview", href: "#overview" },
  { label: "Who can use it", href: "#who-can-use" },
  { label: "How the app works", href: "#workflow" },
  { label: "Exam support", href: "#exam-support" },
  { label: "Current beta features", href: "#beta-features" },
  { label: "Coming soon", href: "#coming-soon" },
  { label: "Important note", href: "#important-note" },
]

const examGroups = [
  {
    title: "Engineering entrance",
    exams: "IIT-JEE, MHT-CET, GATE, Polytechnic",
    useCase:
      "Students can plan Physics, Chemistry, and Mathematics preparation, track chapters, mark weak topics, and review mock test performance.",
  },
  {
    title: "Medical entrance",
    exams: "NEET UG, NEET PG",
    useCase:
      "Students can manage Biology, Physics, and Chemistry revision, track weak chapters, and plan repeated practice before tests.",
  },
  {
    title: "School and board exams",
    exams: "Class 9th to 12th, Boards, ICSE Board, Olympiads, School Curriculum",
    useCase:
      "Students can organize daily study, subject revision, chapter completion, and test preparation without scattered notebooks.",
  },
  {
    title: "Government and career exams",
    exams:
      "SSC, UPSC, State PSC, Defence, NDA/CDS, Railway, Banking, Judiciary, Teaching, UGC NET",
    useCase:
      "Aspirants can use the same planning and revision workflow for long-term preparation, mock analysis, and mistake tracking.",
  },
]

const workflowSteps = [
  {
    title: "Choose an exam goal",
    detail:
      "The student starts by selecting the exam or preparation goal. The first product focus is IIT-JEE, but the workflow is useful for many exam types.",
  },
  {
    title: "Create a daily study plan",
    detail:
      "The student adds tasks with subject, duration, priority, and status. This keeps daily preparation clear and avoids random study decisions.",
  },
  {
    title: "Track syllabus topics",
    detail:
      "Topics can be marked as Learning, Revision, PYQ Done, Weak, or Completed. This makes preparation progress visible.",
  },
  {
    title: "Revise weak areas",
    detail:
      "Weak topics and mistakes help the student decide what to revise before the next mock test or exam.",
  },
  {
    title: "Review tests and improve",
    detail:
      "Mock test scores, PYQ practice, mistakes, and accuracy can be reviewed so every test gives a clear next action.",
  },
]

const betaFeatures = [
  "Study Planner",
  "Built-in Syllabus Tracker",
  "Topic Progress System",
  "Browser Progress Saving",
  "PYQ Practice Section",
  "Mock Test Tracker",
  "Mistake Notebook",
  "Analytics Dashboard",
]

const comingSoon = [
  "Cloud sync",
  "Login and account system",
  "Advanced analytics",
  "Exam-specific dashboards",
  "AI Tutor support",
  "More syllabus packs",
]

export default function HowItWorksPage({ onBack, onGetStarted }: HowItWorksPageProps) {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={onBack}
            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
          >
            Back to home
          </button>

          <img
            src="/study-sankalp-logo.png"
            alt="Study Sankalp logo"
            className="h-10 w-auto object-contain"
          />

          <button
            onClick={onGetStarted}
            className="rounded-xl bg-blue-600 px-5 py-2 text-sm font-black text-white transition hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      </header>

      <section className="border-b border-slate-200 bg-slate-50 px-6 py-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-700">
            Product Guide
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
            How Study Sankalp helps students manage exam preparation.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Study Sankalp is a preparation management workspace. It does not replace
            books, teachers, coaching, or online classes. It helps students organize the
            work around preparation: planning, syllabus tracking, revision, tests,
            mistakes, and progress.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-sm font-black text-slate-950">On this page</p>

            <nav className="mt-4 space-y-3">
              {tableOfContents.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm font-semibold text-slate-600 transition hover:text-blue-700"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <article className="max-w-4xl">
          <section id="overview" className="scroll-mt-28">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              1. Overview
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-700">
              Many students have study material, lectures, notes, and test papers, but
              still struggle to answer simple questions like what to study today, which
              topics are weak, how much syllabus is complete, and what went wrong in the
              last test.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-700">
              Study Sankalp is built to solve that management problem. The goal is to
              give students one clear place to plan their preparation and track progress
              without depending on scattered notes.
            </p>
          </section>

          <section id="who-can-use" className="mt-14 scroll-mt-28">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              2. Who can use Study Sankalp?
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-700">
              The first focus is IIT-JEE preparation, because the current syllabus
              tracker and topic workflow are being built around serious exam
              preparation. The same structure can also support other exams where
              planning, revision, test tracking, and mistake analysis are important.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-950">
                  <tr>
                    <th className="border-b border-slate-200 px-5 py-4 font-black">
                      Exam group
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 font-black">
                      Examples
                    </th>
                    <th className="border-b border-slate-200 px-5 py-4 font-black">
                      How it helps
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {examGroups.map((group) => (
                    <tr key={group.title} className="align-top">
                      <td className="border-b border-slate-100 px-5 py-4 font-bold text-slate-950">
                        {group.title}
                      </td>
                      <td className="border-b border-slate-100 px-5 py-4 text-slate-700">
                        {group.exams}
                      </td>
                      <td className="border-b border-slate-100 px-5 py-4 leading-6 text-slate-700">
                        {group.useCase}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section id="workflow" className="mt-14 scroll-mt-28">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              3. How the app works
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-700">
              The app follows a simple preparation workflow. A student selects a goal,
              plans daily work, tracks topics, revises weak areas, and reviews test
              performance. This keeps preparation practical instead of making it feel
              like a random checklist.
            </p>

            <div className="mt-6 space-y-5">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <p className="text-sm font-black text-blue-700">Step {index + 1}</p>

                  <h3 className="mt-2 text-xl font-black text-slate-950">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-base leading-7 text-slate-700">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="exam-support" className="mt-14 scroll-mt-28">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              4. Exam support
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-700">
              Study Sankalp does not claim that every exam-specific system is fully
              ready from day one. The current beta starts with IIT-JEE focused
              preparation tools. Other exam goals can use the same planner and tracking
              workflow while more exam-specific data is added step by step.
            </p>
          </section>

          <section id="beta-features" className="mt-14 scroll-mt-28">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              5. Current beta features
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {betaFeatures.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800"
                >
                  {feature}
                </div>
              ))}
            </div>
          </section>

          <section id="coming-soon" className="mt-14 scroll-mt-28">
            <h2 className="text-3xl font-black tracking-tight text-slate-950">
              6. Coming soon
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {comingSoon.map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm font-bold text-blue-800"
                >
                  {feature}
                </div>
              ))}
            </div>
          </section>

          <section
            id="important-note"
            className="mt-14 scroll-mt-28 rounded-3xl bg-slate-950 p-8 text-white"
          >
            <h2 className="text-3xl font-black tracking-tight">7. Important note</h2>

            <p className="mt-4 text-base leading-8 text-slate-300">
              Study Sankalp is not a lecture app and not a coaching replacement. It is a
              preparation management tool. Students can continue learning from their
              preferred teachers, books, coaching, or online platforms while using Study
              Sankalp to organize and track their preparation.
            </p>

            <button
              onClick={onGetStarted}
              className="mt-6 rounded-xl bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-blue-50"
            >
              Start planning
            </button>
          </section>
        </article>
      </div>
    </main>
  )
}
