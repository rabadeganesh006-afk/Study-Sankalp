const features = [
  {
    title: "Study Planner",
    text: "Plan daily study tasks, set priorities, and stay consistent.",
  },
  {
    title: "Progress Tracker",
    text: "Track subjects, chapters, revision, PYQs, and completion status.",
  },
  {
    title: "Mock Test Analysis",
    text: "Record scores, mistakes, weak topics, and improvement trends.",
  },
  {
    title: "Mistake Notebook",
    text: "Save mistakes and revisit them before they become repeated errors.",
  },
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
  "GATE",
  "CAT",
  "CLAT",
]

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/20">
              🛡️
            </div>
            <div>
              <p className="text-lg font-bold leading-none">Study Sankalp</p>
              <p className="mt-1 text-xs font-medium text-slate-500">
                Plan. Track. Progress.
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-600 md:flex">
            <a href="#features" className="hover:text-blue-600">
              Features
            </a>
            <a href="#exams" className="hover:text-blue-600">
              Exams
            </a>
            <a href="#ai" className="hover:text-blue-600">
              AI Tutor
            </a>
          </div>

          <button
  onClick={() => alert("Login system coming soon. First we are building the frontend base.")}
  className="rounded-xl bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
>
  Login
</button>
        </div>
      </nav>

      <section className="relative overflow-hidden px-6 py-20 md:py-28">
        <div className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
              A serious preparation dashboard for students
            </div>

            <h1 className="text-5xl font-black tracking-tight text-slate-950 md:text-7xl">
              With you at every stage of your preparation.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Study Sankalp helps students plan study, track progress, revise
              smarter, analyze tests, and stay consistent toward every serious
              exam goal.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
  href="#features"
  className="rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-700"
>
  Get Started
</a>
<a
  href="#features"
  className="rounded-2xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-900 shadow-sm transition hover:bg-slate-100"
>
  View Features
</a>
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-200/70">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-slate-950 p-6 text-white">
                <p className="text-sm text-slate-300">Today’s Focus</p>
                <h3 className="mt-3 text-2xl font-bold">Physics Revision</h3>
                <p className="mt-3 text-sm text-slate-300">
                  Kinematics + 25 PYQs + mistake review
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-sm font-semibold text-slate-500">
                  Syllabus Progress
                </p>
                <h3 className="mt-3 text-3xl font-black text-blue-600">64%</h3>
                <div className="mt-4 h-3 rounded-full bg-slate-100">
                  <div className="h-3 w-2/3 rounded-full bg-blue-600" />
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-sm font-semibold text-slate-500">
                  Weak Area
                </p>
                <h3 className="mt-3 text-2xl font-bold">Organic Chemistry</h3>
                <p className="mt-3 text-sm text-slate-500">
                  Add revision + mock analysis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="font-bold text-blue-600">Core Features</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Everything a serious student needs to stay on track.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-xl">
                  ✅
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="exams" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="font-bold text-blue-600">For every exam goal</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                Not just one exam. A preparation system for many paths.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Students can use Study Sankalp for competitive exams, boards,
                entrance exams, and custom preparation goals.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {exams.map((exam) => (
                <span
                  key={exam}
                  className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-bold text-slate-700"
                >
                  {exam}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="ai" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="mb-5 inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-200">
                  Coming Soon
                </div>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  AI Tutor for smarter preparation.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Future AI Tutor will help students understand weak topics,
                  create study plans, analyze mistakes, and revise better.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-slate-300">Example future insight</p>
                <h3 className="mt-3 text-2xl font-bold">
                  “Your Physics revision is pending. Revise Kinematics today and
                  solve 25 PYQs.”
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-black">Study Sankalp</p>
            <p className="mt-1 text-sm text-slate-500">
              With you at every stage of your preparation.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            Built for focused students and serious preparation.
          </p>
        </div>
      </footer>
    </main>
  )
}

export default App