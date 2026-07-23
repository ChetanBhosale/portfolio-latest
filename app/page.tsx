import { PortfolioLanding } from "@/components/portfolio-landing"
import { siteDescription, siteName, siteUrl, socials } from "@/lib/site"

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  image: `${siteUrl}/image/gibli.png`,
  jobTitle: "Product Engineer",
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <PortfolioLanding />
    </>
  )
}
