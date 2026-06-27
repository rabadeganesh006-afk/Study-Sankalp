function App() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 rounded-2xl bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          Study Sankalp
        </div>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight text-slate-950 md:text-7xl">
          With you at every stage of your preparation.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Plan your study, track your progress, revise smarter, analyze tests,
          and stay consistent toward your exam goal.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
            Get Started
          </button>
          <button className="rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:bg-slate-100">
            View Features
          </button>
        </div>

        <div className="mt-14 grid w-full max-w-4xl gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
            <h3 className="font-bold text-slate-900">Study Planner</h3>
            <p className="mt-2 text-sm text-slate-600">
              Organize daily tasks and stay consistent.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
            <h3 className="font-bold text-slate-900">Progress Tracker</h3>
            <p className="mt-2 text-sm text-slate-600">
              Track subjects, chapters, revision, and PYQs.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm">
            <h3 className="font-bold text-slate-900">Mock Analysis</h3>
            <p className="mt-2 text-sm text-slate-600">
              Analyze tests, mistakes, weak topics, and improvement.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App