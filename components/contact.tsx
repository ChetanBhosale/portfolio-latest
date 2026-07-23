import { ArrowUpRight } from "lucide-react"

import { socials } from "@/lib/site"

export function Contact() {
  return (
    <section className="py-10">
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-ember">
          {"// contact"}
        </p>
        <h2 className="mt-4 font-mono text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          got a product
          <br />
          to build?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          I take requirements, work with your design team, and ship the whole
          thing end to end. If that&apos;s the gap on your team, let&apos;s
          talk.
        </p>
        <a
          href={`mailto:${socials.email}`}
          className="mt-6 inline-flex items-center gap-2 rounded-lg border border-ember/50 bg-ember/10 px-5 py-2.5 font-mono text-sm font-semibold text-foreground transition-all hover:border-ember hover:bg-ember/20"
        >
          {socials.email}
          <ArrowUpRight className="size-4 text-ember" />
        </a>
      </div>
    </section>
  )
}
