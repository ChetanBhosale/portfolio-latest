"use client"

import Image from "next/image"
import * as React from "react"
import { Plus } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { TechBadge } from "@/components/tech-badge"
import { LinkPreview } from "@/components/ui/link-preview"
import { cn } from "@/lib/utils"

type Org = {
  name: string
  href: string
  meta: string
  logo: string
  site: string
  description: string
  facts: string[]
}

type Job = {
  role: string
  company: string
  duration: string
  org: Org
  bullets: string[]
  tags: string[]
}

const jobs: Job[] = [
  {
    role: "Founding Engineer",
    company: "Linkrunner",
    duration: "oct'25 — present",
    org: {
      name: "Linkrunner",
      href: "https://www.linkrunner.io",
      meta: "linkrunner.io · Bengaluru, India",
      logo: "/image/linkrunner-icon.png",
      site: "/image/linkrunner-site.png",
      description:
        "AI-driven mobile measurement partner covering attribution, deep links, SKAN postbacks, cohorts, and campaign analytics for mobile growth teams.",
      facts: [
        "raised $565K pre-seed, led by Titan Capital",
        "attribution systems trusted by 100+ growth teams",
        "SOC 2 Type 2 · GDPR · ISO 27001",
      ],
    },
    bullets: [
      "Rebuilt the entire dashboard from 0 to 1 and migrated everything over in 20 days, using Figma-wired MCPs with full context of the old dashboard and its APIs.",
      "Own the SDK fleet (Android, iOS, React Native, Flutter, Cordova) and built an SDK console that cuts integration testing from 1 hour to about 5 minutes.",
      "Worked with the team to migrate metrics from Postgres to ClickHouse: analytics queries went from seconds to milliseconds, saving up to $8,000 a month.",
      "Helping the team break the Node.js monolith into Go microservices (gRPC, WAL-backed writes and fallbacks) now handling 25 million+ requests a month.",
      "Migrated event streaming from SQS to Kafka, and helped the team move our entire infrastructure from AWS to GCP.",
    ],
    tags: [
      "TypeScript",
      "Go",
      "React Native",
      "Flutter",
      "ClickHouse",
      "PostgreSQL",
      "Kafka",
      "gRPC",
      "GCP",
    ],
  },
  {
    role: "Software Engineer",
    company: "TransErg @ Petpooja",
    duration: "jun'24 — sep'25",
    org: {
      name: "Petpooja",
      href: "https://www.petpooja.com",
      meta: "petpooja.com · Ahmedabad, India",
      logo: "/image/petpooja-icon.svg",
      site: "/image/petpooja-site.jpg",
      description:
        "Restaurant management platform with POS, billing, inventory, payroll, and integrations that run day-to-day restaurant operations.",
      facts: [
        "raised $15.5M Series C, led by Dharana Capital",
        "150,000+ businesses · 7M+ orders a day",
        "14+ years in restaurant tech",
      ],
    },
    bullets: [
      "Built the Online Ordering Widget (OOW), a scalable ordering flow that handled around 10,000 real food orders a day for top restaurant and hotel chains across India.",
      "Built a domain registry system so restaurants could point their own domain at the storefront they created on OOW and run it as their own website.",
      "Migrated infrastructure from hand-managed single EC2 boxes to Dockerized services, and then onto EKS.",
      "DRI and head of Petpooja Studio: owned a library of 3 million+ food images served directly to Zomato and Swiggy for their menu integrations.",
      "Deployed an LLM pipeline on our own servers to tag, clean, and quality-check food images at that scale, so Studio could keep up without an army of manual reviewers.",
    ],
    tags: ["Node.js", "React", "MongoDB", "Redis", "Docker", "Kubernetes", "AWS"],
  },
  {
    role: "Sales Guy → Full-Stack Engineer",
    company: "Hire My Assistants",
    duration: "dec'22 — jun'23",
    org: {
      name: "Hire My Assistants",
      href: "https://www.hiremyassistants.com/index.html",
      meta: "hiremyassistants.com · Mumbai, India",
      logo: "/image/hiremyassistants-logo.png",
      site: "/image/hiremyassistants-site.png",
      description:
        "Virtual assistant and remote staffing (KPO) firm serving clients across the US, Europe, Australia, and New Zealand.",
      facts: [
        "admin, bookkeeping, e-commerce & support services",
        "flexible part-time to full-time VA plans",
        "offices in Mumbai & Chesapeake, Virginia",
      ],
    },
    bullets: [
      "Fun fact: I joined as a sales and marketing guy. Handled 10 realtors, ran their campaigns, did the negotiations, closed the deals. Then they found out I could code.",
      "Built the internal CRM that 1,000+ realtors used to manage leads and run their day.",
      "Built property listing pages for realtors that handled around 100k visitors a day.",
      "Being the ex-sales guy helped: I knew exactly which parts of the funnel annoyed realtors, so I built those first.",
    ],
    tags: ["React", "Node.js", "MongoDB"],
  },
]

function OrgCard({ org }: { org: Org }) {
  return (
    <div className="w-80 overflow-hidden rounded-xl border bg-popover shadow-xl ring-1 ring-foreground/10">
      <Image
        src={org.site}
        alt={`${org.name} website preview`}
        width={800}
        height={420}
        className="aspect-video w-full border-b object-cover object-top"
      />
      <div className="p-4">
        <div className="flex items-center gap-3">
          <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-white p-1">
            <Image
              src={org.logo}
              alt={`${org.name} logo`}
              width={64}
              height={64}
              className="max-h-full w-auto object-contain"
            />
          </span>
          <div>
            <p className="font-mono text-sm font-semibold">{org.name}</p>
            <p className="text-xs text-muted-foreground">{org.meta}</p>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {org.description}
        </p>
        <ul className="mt-3 space-y-1.5 font-mono text-xs text-muted-foreground">
          {org.facts.map((fact) => (
            <li key={fact} className="flex gap-2">
              <span className="text-ember">▸</span>
              <span>{fact}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Experience() {
  const [open, setOpen] = React.useState<number | null>(0)

  return (
    <section className="py-6">
      <div className="rounded-lg border border-ember/60 bg-ember/10 px-5 py-4 font-mono font-semibold">
        💼 What I&apos;ve been up to
      </div>

      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Selected work across full-stack engineering, AI systems, and mobile
        attribution.
      </p>

      <div className="mt-4">
        <div className="hidden grid-cols-[1.3fr_1fr_1fr_2.5rem] items-center gap-3 border-b px-2 pb-3 font-mono text-sm font-semibold text-ember sm:grid">
          <span>Designation</span>
          <span>Organization</span>
          <span>Duration</span>
          <span />
        </div>

        {jobs.map((job, index) => {
          const isOpen = open === index
          return (
            <div key={job.company} className="border-b">
              <div
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setOpen(isOpen ? null : index)
                  }
                }}
                className={cn(
                  "flex cursor-pointer items-center justify-between gap-3 px-2 py-3 transition-colors sm:grid sm:grid-cols-[1.3fr_1fr_1fr_2.5rem]",
                  isOpen ? "bg-ember/5" : "hover:bg-ember/5"
                )}
              >
                <div className="min-w-0">
                  <p className="font-semibold">{job.role}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted-foreground sm:hidden">
                    {job.company} · {job.duration}
                  </p>
                </div>
                <span
                  className="hidden text-sm sm:block"
                  onClick={(event) => event.stopPropagation()}
                >
                  <LinkPreview
                    url={job.org.href}
                    className="inline-flex items-center gap-1.5 underline decoration-ember/60 underline-offset-4 transition-colors hover:decoration-ember"
                    preview={<OrgCard org={job.org} />}
                  >
                    <Image
                      src={job.org.logo}
                      alt={`${job.org.name} logo`}
                      width={64}
                      height={64}
                      className="h-4 w-auto max-w-14 shrink-0 rounded-[3px] object-contain"
                    />
                    {job.company}
                  </LinkPreview>
                </span>
                <span className="hidden font-mono text-sm text-muted-foreground sm:block">
                  {job.duration}
                </span>
                <motion.span
                  aria-hidden
                  animate={{
                    rotate: isOpen ? 135 : 0,
                    backgroundColor: isOpen
                      ? "color-mix(in oklab, var(--ember) 12%, transparent)"
                      : "rgba(0,0,0,0)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex size-7 shrink-0 items-center justify-center rounded-full border border-ember/50 text-ember"
                >
                  <Plus className="size-3.5" />
                </motion.span>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-2 pt-1 pb-4">
                      <ul className="space-y-1.5">
                        {job.bullets.map((bullet, bulletIndex) => (
                          <motion.li
                            key={bullet}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.1 + bulletIndex * 0.07,
                              duration: 0.3,
                            }}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <span className="text-ember">◇</span>
                            <span>{bullet}</span>
                          </motion.li>
                        ))}
                      </ul>
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.1 + job.bullets.length * 0.07,
                          duration: 0.3,
                        }}
                        className="mt-3 flex flex-wrap gap-2"
                      >
                        {job.tags.map((tag) => (
                          <TechBadge key={tag} name={tag} />
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
