import Image from "next/image"
import { ArrowUpRight, Mail } from "lucide-react"
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

import { BengaluruClock, TerminalTicker } from "@/components/live-bits"
import { Mascot } from "@/components/mascot"
import { TechBadge } from "@/components/tech-badge"
import { Reveal } from "@/components/ui/reveal"
import { socials } from "@/lib/site"
import { cn } from "@/lib/utils"

type Job = {
  company: string
  role: string
  logo: string
  logoClass?: string
  href: string
  about: string
  bullets: string[]
}

const jobs: Job[] = [
  {
    company: "Linkrunner",
    role: "Founding Engineer",
    logo: "/image/linkrunner-icon.png",
    href: "https://www.linkrunner.io",
    about:
      "Mobile measurement partner for growth teams: attribution, deep links, SKAN, and campaign analytics. $565K pre-seed led by Titan Capital, used by 100+ growth teams.",
    bullets: [
      "Own the product loop end to end: sit on customer calls, shape scope in Figma with design, ship it, then own what happens after launch.",
      "Rebuilt the whole customer dashboard from 0 to 1 and migrated every account in 20 days.",
      "Own the SDK fleet on five platforms (Android, iOS, React Native, Flutter, Cordova) and built an SDK console that cut integration testing from 1 hour to 5 minutes.",
      "Moved analytics from Postgres to ClickHouse. Queries went from seconds to milliseconds and infra cost dropped by up to $8K a month.",
      "Helping break the Node.js monolith into Go microservices (gRPC, WAL-backed writes) now serving 25M+ requests a month.",
      "Moved event streaming from SQS to Kafka and helped move the infra from AWS to GCP.",
    ],
  },
  {
    company: "Respan",
    role: "Backend Engineer",
    logo: "/image/respan-icon.png",
    logoClass: "bg-white",
    href: "https://www.respan.ai",
    about:
      "YC W24 AI engineering platform (formerly Keywords AI). One gateway for 1,000+ models, with tracing, monitoring, and evals for AI agents. Handles 2T+ tokens and 1B+ logs a month.",
    bullets: [
      "Backend engineer on the platform that sits between AI products and their LLM calls: gateway, tracing, and evals.",
      "Working on services used by teams like Retell AI, Mem0, Gumloop, and Lovable.",
    ],
  },
  {
    company: "Petpooja (via TransErg)",
    role: "Software Engineer",
    logo: "/image/petpooja-icon.svg",
    logoClass: "bg-white p-1.5",
    href: "https://www.petpooja.com",
    about:
      "Restaurant tech platform serving 150K+ businesses. Joined TransErg and continued at Petpooja after the acquisition.",
    bullets: [
      "Shipped the online ordering widget for restaurant and hotel chains, handling around 10K orders a day.",
      "Owned Petpooja Studio: 3M+ food images delivered to Zomato and Swiggy, cleaned and tagged by a self-hosted LLM pipeline.",
      "Moved services from hand-managed EC2 boxes to Docker and then EKS.",
    ],
  },
  {
    company: "Hire My Assistants",
    role: "Sales, then Full-stack Engineer",
    logo: "/image/hiremyassistants-logo.png",
    logoClass: "bg-white p-1.5",
    href: "https://www.hiremyassistants.com/index.html",
    about:
      "Joined in sales and marketing, then moved to engineering once they found out I could code.",
    bullets: [
      "Built the internal CRM used by 1,000+ realtors, straight from what I heard on sales calls.",
      "Built property listing pages serving around 100K visitors a day.",
    ],
  },
]

const projects = [
  {
    name: "Nakama",
    status: "Private beta",
    description:
      "Clone your prod stack into safe sandboxes with real masked data, for AI agents, security testing, and API testing.",
    href: "https://trynakama.com",
  },
  {
    name: "keybro",
    status: "macOS",
    description:
      "Menu bar app that puts Claude Code in any text field, with a local memory your sessions can share.",
    href: "https://github.com/ChetanBhosale/keybro",
  },
  {
    name: "geo.repair",
    status: "Live",
    description:
      "AI crawler audit that clones your repo, applies the fixes, checks the build, and opens the PR.",
    href: "https://geo.repair",
  },
  {
    name: "CleanMac",
    status: "macOS",
    description:
      "Native storage cleaner that finds what other cleaners miss and explains every file in plain words.",
    href: "https://github.com/ChetanBhosale/cleanmac",
  },
  {
    name: "OmegleForTech",
    status: "Live",
    description:
      "GitHub-verified 1:1 video chat for developers, peer to peer over WebRTC.",
    href: "https://omeglefortech.com",
  },
  {
    name: "Dovia",
    status: "Building",
    description:
      "Prompt-to-app builder with multi-model routing, live preview, and one-click deploy.",
    href: "https://dovia-delta.vercel.app",
  },
]

const stack = [
  "TypeScript",
  "Go",
  "Python",
  "React",
  "Next.js",
  "React Native",
  "Node.js",
  "Kafka",
  "PostgreSQL",
  "ClickHouse",
  "Redis",
  "Kubernetes",
  "Docker",
  "AWS",
  "GCP",
]

const links = [
  { label: "GitHub", href: socials.github, icon: FaGithub },
  { label: "LinkedIn", href: socials.linkedin, icon: FaLinkedinIn },
  { label: "X", href: socials.x, icon: FaXTwitter },
]

const nav = [
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
]

function Section({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="border-t border-border py-14">
      <Reveal>
        <h2 className="mb-8 text-sm font-medium text-subtle">{title}</h2>
        {children}
      </Reveal>
    </section>
  )
}

export function PortfolioLanding() {
  return (
    <div className="relative isolate min-h-svh">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,255,255,0.09),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_60%_at_50%_0%,black,transparent)] [background-size:24px_24px]"
      />
      <header className="sticky top-4 z-40 mx-auto max-w-4xl px-6">
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/10 bg-background/60 py-2 pr-2 pl-5 shadow-lg shadow-black/40 backdrop-blur-xl">
          <a href="#top" aria-label="Back to top" className="min-w-0 truncate">
            <TerminalTicker />
          </a>
          <nav
            aria-label="Main navigation"
            className="flex shrink-0 items-center"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto w-full max-w-4xl px-6 pb-24">
        <main id="top">
          <section className="animate-in py-14 duration-500 fade-in sm:py-20">
            <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0">
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  Chetan Bhosale
                </h1>
                <p className="mt-3 text-lg text-muted-foreground sm:text-xl">
                  Founding Engineer at{" "}
                  <span className="text-foreground">Linkrunner</span>. Backend
                  at{" "}
                  <span className="whitespace-nowrap">
                    <span className="text-foreground">Respan</span> (YC W24).
                  </span>
                </p>
                <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                  Ex sales guy who learned to code. I sit with customers, work
                  with design, and ship the whole thing, from the React screen
                  down to Go services, Kafka, and ClickHouse.
                </p>
                <p className="mt-4 text-sm text-subtle">
                  Bengaluru, India <span className="mx-1.5">·</span>
                  <BengaluruClock />
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                  <a
                    href={`mailto:${socials.email}`}
                    className="inline-flex h-9 items-center gap-2 rounded-md bg-foreground px-4 font-medium text-background transition-opacity hover:opacity-85"
                  >
                    <Mail aria-hidden className="size-4" />
                    Email me
                  </a>
                  {links.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon aria-hidden className="size-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
              <Image
                src="/image/gibli.png"
                alt="Illustrated portrait of Chetan Bhosale"
                width={1024}
                height={1536}
                priority
                sizes="(max-width: 768px) 160px, 224px"
                className="aspect-[4/5] w-40 shrink-0 rounded-2xl border border-border object-cover object-[50%_20%] md:w-56"
              />
            </div>
          </section>

          <Section id="work" title="Work">
            <div className="space-y-12">
              {jobs.map((job) => (
                <article
                  key={job.company}
                  className="grid gap-4 sm:grid-cols-[2.5rem_1fr] sm:gap-5"
                >
                  <span
                    className={cn(
                      "grid size-10 place-items-center overflow-hidden rounded-lg border border-border",
                      job.logoClass
                    )}
                  >
                    <Image
                      src={job.logo}
                      alt={`${job.company} logo`}
                      width={80}
                      height={80}
                      className="max-h-full w-auto object-contain"
                    />
                  </span>
                  <div>
                    <h3 className="font-medium">
                      <a
                        href={job.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1"
                      >
                        {job.company}
                        <ArrowUpRight
                          aria-hidden
                          className="size-3.5 text-subtle transition-colors group-hover:text-foreground"
                        />
                      </a>
                    </h3>
                    <p className="text-sm text-muted-foreground">{job.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {job.about}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {job.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:top-[0.6em] before:left-0 before:size-1 before:rounded-full before:bg-subtle"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section id="projects" title="Projects">
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="inline-flex items-center gap-1 font-medium">
                      {project.name}
                      <ArrowUpRight
                        aria-hidden
                        className="size-3.5 text-subtle transition-colors group-hover:text-foreground"
                      />
                    </h3>
                    <span className="text-xs text-subtle">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </a>
              ))}
            </div>
          </Section>

          <Section title="Stack">
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <TechBadge key={item} name={item} mono />
              ))}
            </div>
          </Section>

          <Section id="about" title="About">
            <div className="max-w-2xl space-y-4 leading-relaxed text-muted-foreground">
              <p>
                I started in sales, running campaigns for realtors. Then they
                found out I could code, and I started building the tools they
                kept asking for. Hearing the problem first and then shipping the
                fix is still how I work.
              </p>
              <p>
                Outside work I make music, draw, game, cook, and plan the next
                trip. Martial arts is the longest running thread: I&apos;ve won
                three national karate golds.
              </p>
            </div>
          </Section>

          <Section id="contact" title="Contact">
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Got a product idea or a hard backend problem? Email me at{" "}
              <a
                href={`mailto:${socials.email}`}
                className="text-foreground underline decoration-subtle underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {socials.email}
              </a>
              .
            </p>
          </Section>
        </main>

        <footer className="flex flex-col justify-between gap-4 border-t border-border pt-8 text-sm text-subtle sm:flex-row">
          <span>© 2026 Chetan Bhosale</span>
          <div className="flex gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </div>

      <Mascot />
    </div>
  )
}
