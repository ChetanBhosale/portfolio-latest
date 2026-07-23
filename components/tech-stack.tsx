import { TechBadge } from "@/components/tech-badge"
import { SectionHeading } from "@/components/ui/section-heading"

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
    <section className="py-2">
      <SectionHeading number="03" id="stack">
        stack
      </SectionHeading>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {groups.map((group) => (
          <div
            key={group.label}
            className="group rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/40"
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
