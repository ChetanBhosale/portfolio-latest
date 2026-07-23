export function SiteFooter() {
  return (
    <footer className="py-6 pt-10">
      <blockquote className="border-l-2 border-ember pl-4 font-mono text-sm text-muted-foreground italic">
        &ldquo;Ship the boring reliability so the magic can happen on top of
        it.&rdquo;
      </blockquote>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
        Off the keyboard: gaming, cooking, making music, drawing, karate, and
        MMA (3x national gold 🥇). The ADHD brain keeps adding hobbies to the
        list, travel included.
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
        <a
          href="mailto:chetanbhosale810@gmail.com"
          className="group flex items-center gap-2.5"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember/60" />
            <span className="relative inline-flex size-2 rounded-full bg-ember" />
          </span>
          <span className="font-mono text-xs text-muted-foreground transition-colors group-hover:text-ember">
            open to interesting problems ·{" "}
            <span className="underline decoration-ember/60 underline-offset-4 group-hover:decoration-ember">
              say hi
            </span>
          </span>
        </a>
        <p className="font-mono text-xs text-muted-foreground/70">
          © 2026 chetan bhosale
        </p>
      </div>
    </footer>
  )
}
