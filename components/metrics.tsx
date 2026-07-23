const metrics = [
  { value: "25M+", label: "requests / month" },
  { value: "10K", label: "orders / day" },
  { value: "3M+", label: "images served" },
  { value: "100+", label: "teams shipped to" },
]

export function Metrics() {
  return (
    <section className="py-6">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-card px-4 py-5 transition-colors hover:bg-ember/5"
          >
            <p className="font-mono text-3xl font-bold tracking-tight text-foreground">
              {m.value}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {m.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
