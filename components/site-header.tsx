import Link from "next/link"

const sections = [
  { label: "work", href: "#work" },
  { label: "projects", href: "#projects" },
  { label: "stack", href: "#stack" },
  { label: "contact", href: "#contact" },
]

const socials = [
  { label: "github", href: "https://github.com/ChetanBhosale" },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/chetan-bhosale-092868231/",
  },
  { label: "x", href: "https://x.com/cbtweets810" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-3 z-40 -mx-6 px-6 pt-4 pb-2">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-x-6 rounded-full border border-border bg-background/60 px-5 py-2.5 backdrop-blur-md">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight text-foreground"
        >
          chetan.bhosale<span className="text-ember">()</span>
        </Link>
        <nav className="flex items-center gap-5 font-mono text-xs text-muted-foreground">
          <span className="hidden items-center gap-4 sm:flex">
            {sections.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="transition-colors hover:text-foreground hover:text-ember"
              >
                {s.label}
              </a>
            ))}
          </span>
          <span className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground hover:text-ember"
              >
                {s.label}
              </a>
            ))}
          </span>
        </nav>
      </div>
    </header>
  )
}
