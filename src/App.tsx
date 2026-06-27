import { useEffect, useState } from "react"

type Page = "home" | "auth" | "app"

type AppView =
  | "dashboard"
  | "planner"
  | "subjects"
  | "pyq"
  | "mocks"
  | "mistakes"
  | "analytics"
  | "ai"
  | "profile"

type StudyTask = {
  id: string
  title: string
  subject: string
  duration: string
  priority: "Low" | "Medium" | "High"
  status: "Pending" | "In Progress" | "Done"
}
const features = [
  {
    title: "Study Planner",
    text: "Plan daily study tasks, priorities, and revision blocks.",
  },
  {
    title: "Subjects & Chapters",
    text: "Track chapter status, weak topics, and syllabus completion.",
  },
  {
    title: "Mock Test Tracker",
    text: "Save scores, analyze mistakes, and monitor improvement.",
  },
  {
    title: "Mistake Notebook",
    text: "Record mistakes and revisit them before the next test.",
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

const sidebarItems: { label: string; view: AppView; icon: string }[] = [
  { label: "Dashboard", view: "dashboard", icon: "🏠" },
  { label: "Study Planner", view: "planner", icon: "📅" },
  { label: "Subjects", view: "subjects", icon: "📚" },
  { label: "PYQ Practice", view: "pyq", icon: "π" },
  { label: "Mock Tests", view: "mocks", icon: "📝" },
  { label: "Mistake Notebook", view: "mistakes", icon: "⚠️" },
  { label: "Analytics", view: "analytics", icon: "📊" },
  { label: "AI Tutor", view: "ai", icon: "🤖" },
  { label: "Profile", view: "profile", icon: "👤" },
]

function App() {
  const [page, setPage] = useState<Page>("home")
  const [activeView, setActiveView] = useState<AppView>("dashboard")

  if (page === "auth") {
    return <AuthPage onBack={() => setPage("home")} onDemo={() => setPage("app")} />
  }

  if (page === "app") {
    return (
      <DashboardApp
        activeView={activeView}
        setActiveView={setActiveView}
        onLogout={() => {
          setActiveView("dashboard")
          setPage("home")
        }}
      />
    )
  }

  return <LandingPage onLogin={() => setPage("auth")} />
}

function LandingPage({ onLogin }: { onLogin: () => void }) {
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
            onClick={onLogin}
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
              <button
                onClick={onLogin}
                className="rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Get Started
              </button>
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
          <p className="font-bold text-blue-600">Core Features</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight md:text-5xl">
            Everything a serious student needs to stay on track.
          </h2>

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
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
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

function AuthPage({
  onBack,
  onDemo,
}: {
  onBack: () => void
  onDemo: () => void
}) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <button
        onClick={onBack}
        className="rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-slate-300 hover:bg-white/10"
      >
        ← Back to home
      </button>

      <section className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="mb-6 inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-200">
            Demo login
          </div>
          <h1 className="text-5xl font-black tracking-tight md:text-6xl">
            Start your preparation dashboard.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Real login with cloud sync will be added using AWS Amplify and
            Cognito. For now, continue with demo mode and explore the dashboard.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white p-8 text-slate-950 shadow-2xl">
          <h2 className="text-2xl font-black">Login to Study Sankalp</h2>

          <label className="mt-6 block text-sm font-bold text-slate-700">
            Email
          </label>
          <input
            disabled
            placeholder="student@example.com"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
          />

          <label className="mt-4 block text-sm font-bold text-slate-700">
            Password
          </label>
          <input
            disabled
            placeholder="••••••••"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none"
          />

          <button
            onClick={onDemo}
            className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
          >
            Continue Demo
          </button>

          <p className="mt-4 text-center text-sm text-slate-500">
            AWS login and cloud sync coming in backend phase.
          </p>
        </div>
      </section>
    </main>
  )
}

function DashboardApp({
  activeView,
  setActiveView,
  onLogout,
}: {
  activeView: AppView
  setActiveView: (view: AppView) => void
  onLogout: () => void
}) {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="flex min-h-screen">
        <aside className="hidden w-72 border-r border-slate-200 bg-white p-5 md:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white">
              🛡️
            </div>
            <div>
              <p className="font-black">Study Sankalp</p>
              <p className="text-xs font-medium text-slate-500">
                Prep dashboard
              </p>
            </div>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.view}
                onClick={() => setActiveView(item.view)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-bold transition ${
                  activeView === item.view
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                }`}
              >
                <span>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <section className="flex-1">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">
                Demo workspace
              </p>
              <h1 className="text-2xl font-black">
                {getViewTitle(activeView)}
              </h1>
            </div>

            <button
              onClick={onLogout}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100"
            >
              Logout
            </button>
          </header>

          <div className="p-6">{renderView(activeView)}</div>
        </section>
      </div>
    </main>
  )
}

function getViewTitle(view: AppView) {
  const found = sidebarItems.find((item) => item.view === view)
  return found?.label ?? "Dashboard"
}

function renderView(view: AppView) {
  if (view === "dashboard") return <DashboardView />
  if (view === "planner") return <PlannerView />
  if (view === "subjects") return <SimplePage title="Subjects & Chapters" text="Subject and chapter progress tracking will be built here." />
  if (view === "pyq") return <SimplePage title="PYQ Practice" text="PYQ practice tracker will be built here." />
  if (view === "mocks") return <SimplePage title="Mock Tests" text="Mock test score and weak topic analysis will be built here." />
  if (view === "mistakes") return <SimplePage title="Mistake Notebook" text="Mistake tracking and revisit system will be built here." />
  if (view === "analytics") return <SimplePage title="Analytics" text="Study progress and performance analytics will be built here." />
  if (view === "profile") return <SimplePage title="Profile" text="Student profile and preferences will be built here." />
  return <AiTutorView />
}
function PlannerView() {
  const [tasks, setTasks] = useState<StudyTask[]>(() => {
    try {
      const savedTasks = localStorage.getItem("study-sankalp-tasks")
      if (savedTasks) return JSON.parse(savedTasks) as StudyTask[]
    } catch {
      return []
    }

    return [
      {
        id: "1",
        title: "Physics: Kinematics revision",
        subject: "Physics",
        duration: "60",
        priority: "High",
        status: "Pending",
      },
      {
        id: "2",
        title: "Chemistry: Organic weak topics",
        subject: "Chemistry",
        duration: "45",
        priority: "Medium",
        status: "In Progress",
      },
    ]
  })

  const [title, setTitle] = useState("")
  const [subject, setSubject] = useState("Physics")
  const [duration, setDuration] = useState("60")
  const [priority, setPriority] = useState<StudyTask["priority"]>("Medium")

  useEffect(() => {
    localStorage.setItem("study-sankalp-tasks", JSON.stringify(tasks))
  }, [tasks])

  const completedTasks = tasks.filter((task) => task.status === "Done").length
  const totalMinutes = tasks.reduce(
    (sum, task) => sum + Number(task.duration || 0),
    0,
  )

  function addTask() {
    if (!title.trim()) {
      alert("Please enter a study task.")
      return
    }

    const newTask: StudyTask = {
      id: Date.now().toString(),
      title: title.trim(),
      subject,
      duration,
      priority,
      status: "Pending",
    }

    setTasks([newTask, ...tasks])
    setTitle("")
    setSubject("Physics")
    setDuration("60")
    setPriority("Medium")
  }

  function updateTaskStatus(id: string, status: StudyTask["status"]) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status } : task)),
    )
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
        <p className="text-sm font-semibold text-blue-200">Study Planner</p>
        <h2 className="mt-3 text-4xl font-black">
          Plan today. Protect your consistency.
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          Add your daily study tasks, track status, and keep your preparation
          organized.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <StatCard title="Total Tasks" value={String(tasks.length)} text="Today’s plan" />
        <StatCard title="Completed" value={String(completedTasks)} text="Tasks done" />
        <StatCard title="Study Time" value={`${totalMinutes} min`} text="Planned duration" />
      </div>

      <div className="grid gap-6 lg:grid-cols-[420px_1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <h3 className="text-2xl font-black">Add study task</h3>

          <label className="mt-6 block text-sm font-bold text-slate-700">
            Task title
          </label>
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Example: Maths integration practice"
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500"
          />

          <label className="mt-4 block text-sm font-bold text-slate-700">
            Subject
          </label>
          <select
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500"
          >
            <option>Physics</option>
            <option>Chemistry</option>
            <option>Maths</option>
            <option>Biology</option>
            <option>English</option>
            <option>General Studies</option>
          </select>

          <label className="mt-4 block text-sm font-bold text-slate-700">
            Duration
          </label>
          <select
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500"
          >
            <option value="30">30 minutes</option>
            <option value="45">45 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1.5 hours</option>
            <option value="120">2 hours</option>
          </select>

          <label className="mt-4 block text-sm font-bold text-slate-700">
            Priority
          </label>
          <select
            value={priority}
            onChange={(event) =>
              setPriority(event.target.value as StudyTask["priority"])
            }
            className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-500"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <button
            onClick={addTask}
            className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
          >
            Add Task
          </button>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6">
          <h3 className="text-2xl font-black">Today’s tasks</h3>

          <div className="mt-6 space-y-4">
            {tasks.length === 0 ? (
              <div className="rounded-2xl bg-slate-50 p-6 text-center">
                <p className="font-bold text-slate-600">
                  No tasks yet. Add your first study task.
                </p>
              </div>
            ) : (
              tasks.map((task) => (
                <div
                  key={task.id}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="font-black text-slate-950">
                        {task.title}
                      </h4>
                      <p className="mt-2 text-sm text-slate-500">
                        {task.subject} • {task.duration} min • {task.priority} priority
                      </p>
                    </div>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="rounded-xl border border-red-200 bg-white px-3 py-2 text-sm font-bold text-red-600 hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {(["Pending", "In Progress", "Done"] as StudyTask["status"][]).map(
                      (status) => (
                        <button
                          key={status}
                          onClick={() => updateTaskStatus(task.id, status)}
                          className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                            task.status === status
                              ? "bg-blue-600 text-white"
                              : "bg-white text-slate-600 hover:bg-slate-100"
                          }`}
                        >
                          {status}
                        </button>
                      ),
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
function DashboardView() {
  return (
    <div className="space-y-6">
      <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
        <p className="text-sm font-semibold text-blue-200">Welcome back</p>
        <h2 className="mt-3 text-4xl font-black">
          Today is a good day to protect your Sankalp.
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          This dashboard will show today’s plan, syllabus progress, revision
          due, mock test scores, and weak topics.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <StatCard title="Study Goal" value="4 hrs" text="Daily target" />
        <StatCard title="Syllabus" value="64%" text="Overall progress" />
        <StatCard title="Mock Score" value="142/300" text="Latest test" />
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-xl font-black">Today’s Plan</h3>
          <div className="mt-5 space-y-3">
            <Task title="Physics: Kinematics revision" status="Pending" />
            <Task title="Chemistry: Organic weak topics" status="In Progress" />
            <Task title="Maths: 25 PYQs" status="Done" />
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6">
          <h3 className="text-xl font-black">Weak Topics</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {["Organic Chemistry", "Integration", "Modern Physics", "Time Management"].map(
              (topic) => (
                <span
                  key={topic}
                  className="rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-700"
                >
                  {topic}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({
  title,
  value,
  text,
}: {
  title: string
  value: string
  text: string
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <p className="text-sm font-bold text-slate-500">{title}</p>
      <h3 className="mt-3 text-4xl font-black text-blue-600">{value}</h3>
      <p className="mt-2 text-sm text-slate-500">{text}</p>
    </div>
  )
}

function Task({ title, status }: { title: string; status: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
      <p className="font-bold">{title}</p>
      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
        {status}
      </span>
    </div>
  )
}

function SimplePage({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
      <h2 className="text-3xl font-black">{title}</h2>
      <p className="mt-4 max-w-2xl text-slate-600">{text}</p>

      <div className="mt-8 rounded-3xl bg-slate-50 p-6">
        <p className="font-bold text-slate-700">
          This page is part of the frontend MVP. Working forms and cloud sync
          will be added step by step.
        </p>
      </div>
    </div>
  )
}

function AiTutorView() {
  return (
    <div className="rounded-[2rem] bg-slate-950 p-8 text-white">
      <div className="mb-5 inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-200">
        Coming Soon
      </div>
      <h2 className="text-4xl font-black">AI Tutor is coming soon.</h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
        AI Tutor will help students understand weak topics, create study plans,
        analyze mistakes, and revise smarter. It will be added later with proper
        cost control and safety.
      </p>
    </div>
  )
}

export default App