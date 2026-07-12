import Image from "next/image"

export function Education() {
  return (
    <section className="border-t border-dashed py-8">
      <h2 className="font-mono text-lg font-bold tracking-tight">
        <span className="text-ember">#</span> education
      </h2>

      <div className="mt-5 space-y-3">
        <div className="flex flex-col gap-4 rounded-xl border bg-card p-4 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/40 hover:shadow-md sm:flex-row sm:items-center">
          <span className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-white p-1.5">
            <Image
              src="/image/sxca-logo.svg"
              alt="St. Xavier's College, Ahmedabad logo"
              width={84}
              height={84}
              className="max-h-full w-auto object-contain"
            />
          </span>
          <div className="min-w-0 flex-1">
            <p className="font-semibold">
              St. Xavier&apos;s College, Ahmedabad
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Bachelor of Computer Applications (BCA)
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
              <span>2021 — 2024</span>
              <span>·</span>
              <span className="rounded-full border border-ember/40 bg-ember/10 px-2 py-0.5 font-semibold text-ember">
                7.9 CGPA
              </span>
            </div>
          </div>
        </div>

        <a
          href="https://100xdevs.com/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-4 rounded-xl border bg-card p-4 shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-ember/40 hover:shadow-md"
        >
          <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border bg-white p-1.5">
            <Image
              src="/image/100xdevs-icon.png"
              alt="100xDevs logo"
              width={128}
              height={128}
              className="max-h-full w-auto object-contain"
            />
          </span>
          <div className="min-w-0">
            <p className="font-semibold transition-colors group-hover:text-ember">
              100xDevs community
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Member of the 100xDevs community, learning and building with
              other engineers.
            </p>
          </div>
        </a>
      </div>
    </section>
  )
}
