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
      "25M+ monthly requests",
      "20-day dashboard rebuild",
      "$8K/month saved",
    ],
    bullets: [
      "Join customer calls, identify repeated friction, and translate it into product requirements and priorities.",
      "Partner with design from early flows through Figma reviews, technical tradeoffs, and the final shipped interface.",
      "Own the SDK integration experience across Android, iOS, React Native, Flutter, and Cordova.",
      "Help evolve the platform through ClickHouse analytics, Go services, Kafka, and the move from AWS to GCP.",
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
      "10K orders/day",
      "3M+ images served",
      "EKS migration",
    ],
    bullets: [
      "Took requirements from restaurant and hotel chains and shipped an ordering flow handling about 10K orders each day.",
      "Built a custom-domain registry so restaurant brands could run their storefront on infrastructure they controlled.",
      "Moved manually managed services into Docker and then onto production Kubernetes with EKS.",
      "Led Petpooja Studio and its 3M+ image library, including an internal LLM pipeline for tagging and quality checks.",
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
            <div className="hero-kicker">
              <span className="availability-dot" />
              Product engineer · Bengaluru, India
            </div>

            <h1 className="hero-title">
              I build the systems{" "}
              <br />
              behind the <span>product.</span>
            </h1>

            <div className="hero-lower">
              <p className="hero-intro">
                From an ambiguous brief to a product in people&apos;s hands. I
                connect customer context, interface craft, and production
                engineering.
              </p>

              <div className="hero-actions">
                <a href="#work" className="primary-link">
                  Explore selected work
                  <ArrowDown aria-hidden className="size-4" />
                </a>
                <a href={`mailto:${socials.email}`} className="text-link">
                  Send an email
                  <ExternalArrow />
                </a>
              </div>
            </div>
          </div>

          <div className="hero-meta">
            <div>
              <span>CURRENTLY</span>
              <strong>Founding Engineer</strong>
            </div>
            <div>
              <span>AT</span>
              <strong>Linkrunner</strong>
            </div>
            <div>
              <span>FOCUS</span>
              <strong>Product + Systems</strong>
            </div>
            <div>
              <span>STATUS</span>
              <strong className="status-value">Open to bold ideas</strong>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="content-section manifesto-section">
            <SectionLabel index="01">THE WAY I WORK</SectionLabel>

            <div className="manifesto-grid">
              <div>
                <h2 className="section-title">
                  Most engineers stop at the handoff.
                  <br />
                  <span>I stay for the outcome.</span>
                </h2>
                <p className="section-copy">
                  I started in sales, learned to code, and kept the useful part:
                  listening closely. Today I move between clients, Figma,
                  backend systems, and production without losing the thread.
                </p>
              </div>

              <div className="deliverables">
                <p className="micro-label">WHAT I BRING</p>
                {[
                  "Product sense, before the code",
                  "Interfaces with a point of view",
                  "Backend systems built for reality",
                  "Ownership after launch",
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

            <div className="product-practice">
              <div className="product-practice-intro">
                <p className="micro-label">PRODUCT OWNERSHIP, END TO END</p>
                <p>
                  Good product work is a loop, not a handoff. I stay close to
                  the customer before, during, and after the build.
                </p>
              </div>
              {[
                {
                  index: "01",
                  title: "Understand",
                  copy: "Talk to customers, find the real friction, and separate the request from the underlying need.",
                },
                {
                  index: "02",
                  title: "Shape",
                  copy: "Work with design and product to define the smallest clear solution, tradeoffs included.",
                },
                {
                  index: "03",
                  title: "Ship & learn",
                  copy: "Build it, watch how it performs in reality, and turn feedback into the next useful iteration.",
                },
              ].map((item) => (
                <div key={item.index} className="product-practice-item">
                  <span>{item.index}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <section id="work" className="content-section work-section">
          <Reveal>
            <SectionLabel index="02">SELECTED EXPERIENCE</SectionLabel>
          </Reveal>

          <Reveal>
            <div className="featured-work">
              <div className="featured-top">
                <div className="featured-copy">
                  <p className="micro-label">CURRENT CHAPTER · LINKRUNNER</p>
                  <p className="funding-note">
                    ₹5 Cr pre-seed funding · led by Titan Capital
                  </p>
                  <h2>
                    Product thinking,
                    <br />
                    production depth.
                  </h2>
                  <p>
                    I work across the entire loop—from listening to growth
                    teams and shaping the feature with design, to building the
                    interface and the systems underneath it.
                  </p>
                  <a
                    href="https://www.linkrunner.io"
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    Visit Linkrunner
                    <ExternalArrow />
                  </a>
                </div>

                <a
                  href="https://www.linkrunner.io"
                  target="_blank"
                  rel="noreferrer"
                  className="browser-frame"
                  aria-label="Visit the Linkrunner website"
                >
                  <div className="browser-bar">
                    <span />
                    <span />
                    <span />
                    <p>linkrunner.io</p>
                  </div>
                  <Image
                    src="/image/linkrunner-site.png"
                    alt="Linkrunner website"
                    width={1200}
                    height={630}
                    sizes="(max-width: 900px) 100vw, 42vw"
                    className="browser-image"
                  />
                  <span className="browser-corner">
                    <ExternalArrow />
                  </span>
                </a>
              </div>

              <div className="featured-points">
                {[
                  {
                    title: "Customer-led roadmap",
                    copy: "Join customer conversations, spot recurring friction, and turn it into clear feature decisions.",
                  },
                  {
                    title: "Design partnership",
                    copy: "Work through flows, Figma, edge cases, and technical tradeoffs before engineering begins.",
                  },
                  {
                    title: "Dashboard, 0 → 1",
                    copy: "Rebuilt and migrated the core dashboard in 20 days without losing product context.",
                  },
                  {
                    title: "Better integrations",
                    copy: "Built SDK tooling that reduced integration testing from about one hour to five minutes.",
                  },
                  {
                    title: "Faster analytics",
                    copy: "Moved metrics to ClickHouse, taking queries from seconds to milliseconds and reducing cost.",
                  },
                  {
                    title: "Systems that scale",
                    copy: "Contribute across Go services, Kafka, gRPC, and infrastructure handling 25M+ requests monthly.",
                  },
                ].map((point, index) => (
                  <div key={point.title}>
                    <span>0{index + 1}</span>
                    <h3>{point.title}</h3>
                    <p>{point.copy}</p>
                  </div>
                ))}
              </div>
            </div>
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
            <div className="about-portrait">
              <Image
                src="/image/gibli.png"
                alt="Illustrated portrait of Chetan Bhosale"
                width={1024}
                height={1536}
                sizes="(max-width: 800px) 100vw, 35vw"
              />
              <span className="portrait-tag">BASED IN INDIA · WORKING GLOBALLY</span>
            </div>

            <div className="about-copy">
              <SectionLabel index="05">A LITTLE HUMAN</SectionLabel>
              <h2 className="section-title">
                Engineer by practice.
                <br />
                <span>Curious by default.</span>
              </h2>
              <p>
                Before production code, there were sales calls and real
                customers. That detour became an advantage: I care about the
                reason behind the feature as much as the implementation.
              </p>
              <p>
                Away from the keyboard: making music, drawing, gaming, cooking,
                and martial arts. I&apos;ve won three national karate golds;
                persistence is fairly baked in.
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
              Let&apos;s make something
              <br />
              <span>impossible to ignore.</span>
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
