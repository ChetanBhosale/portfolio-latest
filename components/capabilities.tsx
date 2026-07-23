const capabilities = [
  {
    step: "01",
    title: "Listen",
    description:
      "Sit with clients, pull the real requirements out of what they say — and what they don't. Two years in sales taught me the meeting is where the spec actually lives.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Work alongside the design team on Figma. Turn mockups into a buildable spec before a line of code, so nobody is surprised at ship time.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Ship the product end to end — frontend, API, the infrastructure underneath. TypeScript, Go, React Native, ClickHouse, Kafka, Kubernetes.",
  },
  {
    step: "04",
    title: "Operate",
    description:
      "Keep it running at scale — observability, migrations, cost, reliability. The boring reliability so the magic can happen on top of it.",
  },
]

export function Capabilities() {
  return (
    <section className="py-6">
      <div className="grid gap-3 sm:grid-cols-2">
        {capabilities.map((c) => (
          <div
            key={c.step}
            className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/40"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm font-semibold text-ember">
                {c.step}
              </span>
              <h3 className="font-mono text-lg font-bold tracking-tight">
                {c.title}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {c.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
