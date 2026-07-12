import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { SiteFooter } from "@/components/site-footer"
import { TechStack } from "@/components/tech-stack"
import { Reveal } from "@/components/ui/reveal"
import { siteDescription, siteName, siteUrl, socials } from "@/lib/site"

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/image/gibli.png`,
  jobTitle: "Full Stack Software Engineer",
  description: siteDescription,
  email: `mailto:${socials.email}`,
  worksFor: {
    "@type": "Organization",
    name: "Linkrunner",
    url: "https://www.linkrunner.io",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "St. Xavier's College, Ahmedabad",
  },
  sameAs: [socials.github, socials.linkedin, socials.x],
  knowsAbout: [
    "TypeScript",
    "Go",
    "React",
    "React Native",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "ClickHouse",
    "Kafka",
    "Kubernetes",
    "AWS",
    "GCP",
    "AI systems",
    "LLMs",
  ],
}

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delay={0.05}>
        <Experience />
      </Reveal>
      <Reveal delay={0.05}>
        <Projects />
      </Reveal>
      <Reveal delay={0.05}>
        <Education />
      </Reveal>
      <Reveal delay={0.05}>
        <TechStack />
      </Reveal>
      <Reveal delay={0.05}>
        <SiteFooter />
      </Reveal>
    </main>
  )
}
