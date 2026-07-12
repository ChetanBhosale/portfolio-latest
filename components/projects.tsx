import { ArrowUpRight } from "lucide-react"

import { TechBadge } from "@/components/tech-badge"

type Project = {
  index: string
  name: string
  status: string
  featured: boolean
  href?: string
  summary: string
  tags: string[]
}

const projects: Project[] = [
  {
    index: "01",
    name: "Nakama",
    status: "private beta",
    featured: true,
    href: "https://trynakama.com",
    summary:
      "Clone your entire production stack in seconds. Kubernetes workloads, load balancers, and databases with real masked data, recreated as isolated sandboxes for AI agents, security testing, and API testing. Zero risk to prod.",
    tags: ["Kubernetes", "Docker", "AWS", "AI / LLMs"],
  },
  {
    index: "02",
    name: "OmegleForTech",
    status: "live",
    featured: false,
    href: "https://omeglefortech.com",
    summary:
      "Random 1-on-1 video chat for developers. GitHub-verified peers, instant matching, peer-to-peer WebRTC. Omegle, minus the chaos.",
    tags: ["Next.js", "WebRTC", "WebSockets"],
  },
  {
    index: "03",
    name: "geo.repair",
    status: "live",
    featured: false,
    href: "https://geo.repair",
    summary:
      "Scans your site the way AI crawlers (ChatGPT, Perplexity, Claude) see it: 26 checks, a versioned 0–100 score, then an agent harness that clones your repo into a sandbox, applies fixes, validates the build, and opens a PR. Runs on an auto-scaling AWS worker fleet.",
    tags: ["Next.js", "AI / LLMs", "AWS", "Node.js"],
  },
  {
    index: "04",
    name: "Dovia",
    status: "building",
    featured: true,
    href: "https://dovia-delta.vercel.app",
    summary:
      "A prompt-to-app builder in the spirit of Lovable and v0. Describe what you want and Dovia builds it: multi-model routing, live preview with iterative edits, and one-click deploy from natural language to a working full-stack app.",
    tags: ["Next.js", "AI / LLMs", "WebSockets", "PostgreSQL"],
  },
  {
    index: "05",
    name: "TrafficMine",
    status: "almost there",
    featured: false,
    summary:
      "Website performance and traffic analytics without the bloat, just the numbers that matter.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    index: "06",
    name: "GenChat",
    status: "almost there",
    featured: false,
    summary:
      "Spin up AI chatbots trained on your own data and drop them anywhere.",
    tags: ["React", "AI / LLMs", "Node.js"],
  },
]

export function Projects() {
  return (
    <section className="py-6">
      <h2 className="font-mono text-lg font-bold tracking-tight">
        <span className="text-ember">#</span> side projects
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        From the product experience to the API behind it to the infrastructure
        underneath, I ship the whole thing end to end.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`group rounded-xl border bg-card shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/40 hover:shadow-md ${
              project.featured ? "sm:col-span-2" : ""
            }`}
          >
            <div className="flex h-full flex-col p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-mono text-base">
                  <span className="text-ember">{project.index}</span>{" "}
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-bold tracking-tight transition-colors hover:text-ember"
                    >
                      {project.name}
                      <ArrowUpRight className="size-3.5 text-ember opacity-0 transition-opacity group-hover:opacity-100" />
                    </a>
                  ) : (
                    <span className="font-bold tracking-tight">
                      {project.name}
                    </span>
                  )}
                </p>
                <span className="rounded-full border border-ember/40 bg-ember/10 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {project.status}
                </span>
              </div>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <TechBadge key={tag} name={tag} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-5 font-mono text-xs text-muted-foreground">
        more experiments on{" "}
        <a
          href="https://github.com/ChetanBhosale"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-0.5 underline decoration-ember/60 underline-offset-4 transition-colors hover:text-ember"
        >
          github
          <ArrowUpRight className="size-3" />
        </a>
      </p>
    </section>
  )
}
