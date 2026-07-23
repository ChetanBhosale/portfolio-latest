import Image from "next/image"
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa6"

import { Reveal } from "@/components/ui/reveal"
import { socials } from "@/lib/site"

const experience = [
  {
    number: "01",
    company: "Linkrunner",
    role: "Founding Engineer",
    period: "2025 — NOW",
    description:
      "Working directly with customers and design to shape, ship, and operate a mobile measurement platform trusted by 100+ growth teams.",
    outcomes: [
      "₹5 Cr pre-seed · Titan Capital",
      "100+ growth teams",
      "25M+ monthly requests",
      "20-day dashboard rebuild",
      "1 hour → 5 min testing",
      "Seconds → milliseconds",
      "$8K/month saved",
    ],
    bullets: [
      "Own the product loop with customers and design: join requirement calls, identify repeated friction, shape the scope in Figma, and carry the decision through engineering and release.",
      "Rebuilt the core customer dashboard from 0 → 1 and migrated it in 20 days, using the existing product, APIs, and customer context to preserve behavior while improving the experience.",
      "Own a five-platform SDK fleet across Android, iOS, React Native, Flutter, and Cordova, including the developer experience around integration and release.",
      "Built an SDK console that reduced integration testing from roughly 1 hour to about 5 minutes, giving growth teams much faster feedback while implementing attribution.",
      "Migrated analytics from PostgreSQL to ClickHouse, taking key queries from seconds to milliseconds and reducing infrastructure cost by as much as $8,000 per month.",
      "Helped break the Node.js monolith into Go services using gRPC, WAL-backed writes, and fallbacks for systems now processing more than 25M requests each month.",
      "Moved event streaming from SQS to Kafka and contributed to the wider infrastructure migration from AWS to GCP.",
    ],
    href: "https://www.linkrunner.io",
  },
  {
    number: "02",
    company: "TransErg → Petpooja",
    role: "Software Engineer",
    period: "2024 — 2025",
    description:
      "Joined TransErg LLP as a Software Engineer, then continued at Petpooja after the acquisition—turning restaurant requirements into products and production systems that held up at scale.",
    outcomes: [
      "₹137 Cr Series C · Dharana Capital",
      "150K+ businesses",
      "7M+ company orders/day",
      "10K orders/day",
      "3M+ images served",
      "EKS migration",
    ],
    bullets: [
      "Joined TransErg LLP as a Software Engineer and continued at Petpooja after the acquisition, working inside a restaurant-tech platform serving 150K+ businesses.",
      "Worked with restaurant and hotel chains to turn their ordering requirements into the Online Ordering Widget, which handled roughly 10K real food orders every day.",
      "Built a domain-registry system that allowed restaurant brands to connect their own domains and run the ordering storefront as their own customer-facing website.",
      "Moved services from manually managed single EC2 instances into Docker and then onto production Kubernetes with EKS, improving repeatability and operational ownership.",
      "Served as DRI for Petpooja Studio, owning a library of 3M+ food images delivered to Zomato and Swiggy while coordinating specifications and SLAs with their teams.",
      "Deployed a self-hosted LLM pipeline to tag, clean, and quality-check food images at scale, reducing the manual work required to operate the Studio library.",
    ],
    href: "https://www.petpooja.com",
  },
  {
    number: "03",
    company: "Hire My Assistants",
    role: "Sales → Full-stack",
    period: "2022 — 2023",
    description:
      "Used first-hand insight from sales calls to decide what to build first, then shipped the CRM and property experiences realtors needed.",
    outcomes: ["1K+ CRM users", "100K daily visitors", "Customer-led product"],
    bullets: [
      "Managed sales and campaigns for 10 realtor clients before moving into engineering.",
      "Used the pain heard on customer calls to shape an internal CRM used by more than 1,000 realtors.",
      "Built high-traffic property listing pages serving roughly 100K visitors per day.",
      "Prioritized the parts of the funnel customers struggled with most, then shipped those improvements first.",
    ],
    href: "https://www.hiremyassistants.com/index.html",
  },
]

const projects = [
  {
    index: "01",
    name: "Nakama",
    category: "Cloud infrastructure",
    status: "PRIVATE BETA",
    description:
      "Production-like sandboxes for AI agents, security testing, and API testing—with real, masked data and zero risk to prod.",
    href: "https://trynakama.com",
  },
  {
    index: "02",
    name: "geo.repair",
    category: "AI visibility",
    status: "LIVE",
    description:
      "A 26-point AI crawler audit that can clone a repository, apply fixes, validate the build, and open the pull request.",
    href: "https://geo.repair",
  },
  {
    index: "03",
    name: "OmegleForTech",
    category: "Developer social",
    status: "LIVE",
    description:
      "Fast, GitHub-verified 1:1 video matching for developers, built on WebRTC and real-time presence.",
    href: "https://omeglefortech.com",
  },
  {
    index: "04",
    name: "Dovia",
    category: "Prompt-to-product",
    status: "BUILDING",
    description:
      "A multi-model app builder with iterative editing, live preview, and a path from a sentence to a deployed product.",
    href: "https://dovia-delta.vercel.app",
  },
]

const stack = [
  {
    label: "PRODUCT",
    items: [
      "Customer understanding",
      "Product discovery",
      "Requirement shaping",
      "Design partnership",
      "Launch & feedback",
    ],
  },
  {
    label: "INTERFACE",
    items: ["TypeScript", "Next.js", "React", "React Native", "Flutter"],
  },
  {
    label: "SYSTEMS",
    items: ["Go", "Node.js", "gRPC", "Kafka", "WebSockets"],
  },
  {
    label: "DATA + CLOUD",
    items: ["PostgreSQL", "ClickHouse", "Redis", "Kubernetes", "AWS", "GCP"],
  },
]

function SectionLabel({
  index,
  children,
}: {
  index: string
  children: React.ReactNode
}) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span>{children}</span>
      <span className="section-label-line" />
    </div>
  )
}

function ExternalArrow() {
  return <ArrowUpRight aria-hidden className="size-[0.9em] shrink-0" />
}

export function PortfolioLanding() {
  return (
    <>
      <header className="site-nav">
        <a href="#top" className="brand-mark" aria-label="Chetan Bhosale, home">
          Chetan<span className="brand-slash">.Dev</span>
        </a>

        <nav aria-label="Main navigation" className="site-nav-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-socials">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Chetan on GitHub"
            title="GitHub"
          >
            <FaGithub aria-hidden />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Chetan on LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn aria-hidden />
          </a>
          <a
            href={`mailto:${socials.email}`}
            aria-label="Email Chetan"
            title="Email"
          >
            <Mail aria-hidden />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero-shell">
          <div className="hero-grid" aria-hidden />
          <div className="hero-content">
            <div className="hero-personal-grid">
              <div className="hero-message">
                <div className="hero-kicker">
                  <span className="availability-dot" />
                  Hello, I&apos;m Chetan · Bengaluru, India
                </div>

                <h1 className="hero-title">
                  Chetan Bhosale.
                  <br />
                  <span>Product engineer.</span>
                </h1>

                <div className="hero-lower">
                  <p className="hero-intro">
                    I work with customers, designers, and code to turn fuzzy
                    requirements into products people can actually use.
                    Currently a founding engineer at Linkrunner.
                  </p>

                  <div className="hero-actions">
                    <a href="#work" className="primary-link">
                      See my work
                      <ArrowDown aria-hidden className="size-4" />
                    </a>
                    <a href="#about" className="text-link">
                      More about me
                      <ArrowDown aria-hidden className="size-[0.9em]" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="hero-portrait-card">
                <Image
                  src="/image/gibli.png"
                  alt="Illustrated portrait of Chetan Bhosale"
                  width={1024}
                  height={1536}
                  priority
                  sizes="(max-width: 900px) 80vw, 25vw"
                />
                <div className="hero-portrait-caption">
                  <span>NOW</span>
                  <strong>Founding Engineer @ Linkrunner</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-meta">
            <div>
              <span>CURRENTLY</span>
              <strong>Founding Engineer</strong>
            </div>
            <div>
              <span>BASED IN</span>
              <strong>Bengaluru, India</strong>
            </div>
            <div>
              <span>BACKGROUND</span>
              <strong>Sales → Engineering</strong>
            </div>
            <div>
              <span>OFF THE CLOCK</span>
              <strong className="status-value">Music, MMA & games</strong>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="content-section manifesto-section">
            <SectionLabel index="01">ABOUT ME</SectionLabel>

            <div className="manifesto-grid">
              <div>
                <h2 className="section-title">
                  I started in sales.
                  <br />
                  <span>Then I learned to ship.</span>
                </h2>
                <p className="section-copy">
                  My first useful product lessons came from customer calls, not
                  a codebase. I was managing campaigns for realtors when I
                  started building the tools they kept asking for. That move
                  from hearing the problem to shipping the solution became the
                  way I work.
                </p>
                <p className="section-copy compact">
                  Today I move comfortably between customer conversations,
                  product decisions, Figma, APIs, infrastructure, and
                  production—without losing sight of why we&apos;re building.
                </p>
              </div>

              <div className="deliverables">
                <p className="micro-label">WHAT STAYED WITH ME</p>
                {[
                  "Understand the customer first",
                  "Shape the product, not just the ticket",
                  "Stay close to design",
                  "Own what happens after launch",
                ].map((item, index) => (
                  <div key={item} className="deliverable-row">
                    <span className="deliverable-icon">
                      <span />
                    </span>
                    <span>{item}</span>
                    <span className="deliverable-index">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <section id="work" className="content-section work-section">
          <Reveal>
            <SectionLabel index="02">SELECTED EXPERIENCE</SectionLabel>
          </Reveal>

          <div className="experience-list">
            {experience.map((item) => (
              <Reveal key={item.company}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="experience-card"
                >
                  <div className="experience-card-head">
                    <span className="experience-number">{item.number}</span>
                    <div className="experience-heading">
                      <h3>{item.company}</h3>
                      <p>{item.role}</p>
                    </div>
                    <span className="experience-period">{item.period}</span>
                    <span className="experience-arrow">
                      <ExternalArrow />
                    </span>
                  </div>

                  <div className="experience-card-body">
                    <p className="experience-description">{item.description}</p>
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>
                          <span>↳</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="experience-outcomes">
                    {item.outcomes.map((outcome) => (
                      <span key={outcome}>{outcome}</span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section projects-section">
          <Reveal>
            <SectionLabel index="03">INDEPENDENT BUILDS</SectionLabel>
            <div className="projects-heading">
              <h2 className="section-title">
                Side projects,
                <br />
                <span>serious execution.</span>
              </h2>
              <p className="section-copy">
                Small teams and sharp ideas are my favorite environment. These
                are products I&apos;m designing, engineering, and pushing into
                the world.
              </p>
            </div>
          </Reveal>

          <div className="project-list">
            {projects.map((project) => (
              <Reveal key={project.name}>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="project-row"
                >
                  <span className="project-index">{project.index}</span>
                  <div className="project-name">
                    <h3>{project.name}</h3>
                    <span>{project.category}</span>
                  </div>
                  <p>{project.description}</p>
                  <span className="project-status">
                    <i />
                    {project.status}
                  </span>
                  <span className="project-arrow">
                    <ExternalArrow />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <Reveal>
          <section className="content-section stack-section">
            <SectionLabel index="04">TOOLKIT</SectionLabel>
            <div className="stack-heading">
              <h2 className="section-title">
                Broad enough for the whole product.
                <br />
                <span>Deep where it matters.</span>
              </h2>
            </div>

            <div className="stack-grid">
              {stack.map((group, groupIndex) => (
                <div key={group.label} className="stack-group">
                  <div className="stack-group-head">
                    <span>0{groupIndex + 1}</span>
                    <h3>{group.label}</h3>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="about" className="content-section about-section">
            <div className="about-intro">
              <SectionLabel index="05">OUTSIDE THE TERMINAL</SectionLabel>
              <h2 className="section-title">
                There&apos;s more
                <br />
                <span>than the code.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                I&apos;m usually making music, drawing, gaming, trying a new
                recipe, or planning the next place to travel. Curiosity tends
                to spill into everything.
              </p>
              <p>
                Martial arts has been the longest-running thread. I&apos;ve won
                three national karate golds, which probably explains my
                patience for difficult systems and long debugging sessions.
              </p>

              <div className="social-links">
                <a href={socials.github} target="_blank" rel="noreferrer">
                  <FaGithub aria-hidden />
                  GitHub
                  <ExternalArrow />
                </a>
                <a href={socials.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedinIn aria-hidden />
                  LinkedIn
                  <ExternalArrow />
                </a>
              </div>
            </div>
          </section>
        </Reveal>

        <section id="contact" className="contact-section">
          <Reveal>
            <p className="contact-kicker">
              <span className="availability-dot" />
              AVAILABLE FOR THE RIGHT PROBLEM
            </p>
            <h2>
              Want to build something
              <br />
              <span>together?</span>
            </h2>
            <a href={`mailto:${socials.email}`} className="contact-email">
              <Mail aria-hidden />
              {socials.email}
              <ExternalArrow />
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#top" className="brand-mark">
          Chetan<span className="brand-slash">.Dev</span>
        </a>
        <p>Product engineer. Built with intent.</p>
        <div>
          <a href={socials.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={socials.x} target="_blank" rel="noreferrer">
            X / Twitter
          </a>
        </div>
        <span>© 2026 Chetan Bhosale</span>
      </footer>
    </>
  )
}
