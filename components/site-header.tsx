import Link from "next/link"

const nav = [
  {
    label: "github",
    href: "https://github.com/ChetanBhosale",
    external: true,
  },
  {
    label: "linkedin",
    href: "https://www.linkedin.com/in/chetan-bhosale-092868231/",
    external: true,
  },
  { label: "x", href: "https://x.com/cbtweets810", external: true },
  { label: "email", href: "mailto:chetanbhosale810@gmail.com", external: true },
]

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4 pt-8 pb-6">
      <Link
        href="/"
        className="border-b-3 border-ember pb-1 font-mono text-xl font-bold tracking-tight"
      >
        Chetan Bhosale 🕹️
      </Link>
      <nav className="font-mono text-sm text-muted-foreground">
        {nav.map((link, index) => (
          <span key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-ember hover:decoration-ember"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:text-ember hover:decoration-ember"
              >
                {link.label}
              </Link>
            )}
            {index < nav.length - 1 && (
              <span className="mx-2 text-muted-foreground/40">/</span>
            )}
          </span>
        ))}
      </nav>
    </header>
  )
}
