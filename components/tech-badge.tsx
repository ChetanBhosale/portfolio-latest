import { Sparkles } from "lucide-react"
import type { IconType } from "react-icons"
import { FaAws } from "react-icons/fa"
import {
  SiApachekafka,
  SiClaude,
  SiClickhouse,
  SiDocker,
  SiFlutter,
  SiExpress,
  SiGithubactions,
  SiGo,
  SiGooglecloud,
  SiGrafana,
  SiGraphql,
  SiJavascript,
  SiKubernetes,
  SiLangchain,
  SiModelcontextprotocol,
  SiMongodb,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiPrometheus,
  SiPython,
  SiReact,
  SiRedis,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiWebrtc,
} from "react-icons/si"

import { cn } from "@/lib/utils"

type IconEntry = { icon: IconType | typeof Sparkles; color: string }

const icons: Record<string, IconEntry> = {
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#B8A000" },
  Python: { icon: SiPython, color: "#3776AB" },
  Go: { icon: SiGo, color: "#00ADD8" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  Express: { icon: SiExpress, color: "#454545" },
  GraphQL: { icon: SiGraphql, color: "#E10098" },
  tRPC: { icon: SiTrpc, color: "#2596BE" },
  "Next.js": { icon: SiNextdotjs, color: "#171717" },
  React: { icon: SiReact, color: "#149ECA" },
  "React Native": { icon: SiReact, color: "#149ECA" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  "shadcn/ui": { icon: SiShadcnui, color: "#171717" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  ClickHouse: { icon: SiClickhouse, color: "#B8A000" },
  Flutter: { icon: SiFlutter, color: "#02569B" },
  Redis: { icon: SiRedis, color: "#FF4438" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Kafka: { icon: SiApachekafka, color: "#231F20" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Grafana: { icon: SiGrafana, color: "#F46800" },
  Prometheus: { icon: SiPrometheus, color: "#E6522C" },
  Nginx: { icon: SiNginx, color: "#009639" },
  AWS: { icon: FaAws, color: "#FF9900" },
  GCP: { icon: SiGooglecloud, color: "#4285F4" },
  WebRTC: { icon: SiWebrtc, color: "#333333" },
  "AI / LLMs": { icon: Sparkles, color: "var(--ember)" },
  Claude: { icon: SiClaude, color: "#D97757" },
  LangChain: { icon: SiLangchain, color: "#1C3C3C" },
  MCP: { icon: SiModelcontextprotocol, color: "#454545" },
  WebSockets: { icon: SiSocketdotio, color: "#454545" },
  "GitHub Actions": { icon: SiGithubactions, color: "#2088FF" },
}

export function TechBadge({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const entry = icons[name]
  const Icon = entry?.icon

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-2 py-1 font-mono text-xs text-muted-foreground transition-all hover:border-ember/50 hover:text-foreground",
        className
      )}
    >
      {Icon && (
        <Icon className="size-3.5 shrink-0" style={{ color: entry.color }} />
      )}
      {name}
    </span>
  )
}
