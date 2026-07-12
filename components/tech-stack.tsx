import { TechBadge } from "@/components/tech-badge"

const groups = [
  {
    label: "languages",
    items: ["TypeScript", "JavaScript", "Python", "Go"],
  },
  {
    label: "backend",
    items: ["Node.js", "Express", "GraphQL", "tRPC", "gRPC", "WebSockets"],
  },
  {
    label: "frontend & mobile",
    items: ["Next.js", "React", "React Native", "Flutter", "Tailwind", "shadcn/ui"],
  },
  {
    label: "data & cloud",
    items: ["PostgreSQL", "ClickHouse", "Redis", "MongoDB", "Kafka", "AWS", "GCP"],
  },
  {
    label: "devops & observability",
    items: [
      "Kubernetes",
      "Docker",
      "Grafana",
      "Prometheus",
      "Nginx",
      "GitHub Actions",
    ],
  },
  {
    label: "ai & llmops",
    items: ["AI / LLMs", "Claude", "LangChain", "MCP"],
  },
]

export function TechStack() {
  return (
    <section className="py-6">
      <h2 className="font-mono text-lg font-bold tracking-tight">
        <span className="text-ember">#</span> stack
      </h2>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.label}
            className="group rounded-xl border bg-card p-4 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/40 hover:shadow-md"
          >
            <p className="flex items-center gap-2 font-mono text-xs font-semibold text-muted-foreground transition-colors group-hover:text-ember">
              <span className="size-1.5 rounded-full bg-ember/70" />
              {group.label}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <TechBadge key={item} name={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
