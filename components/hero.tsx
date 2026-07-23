import Image from "next/image"
import Link from "next/link"

import { SiteHeader } from "@/components/site-header"
import { LinkPreview } from "@/components/ui/link-preview"
import { Tilt } from "@/components/ui/tilt"

export function Hero() {
  return (
    <>
      <SiteHeader />

      <section className="pb-4 pt-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs text-muted-foreground">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-75" />
            <span className="relative inline-flex size-1.5 rounded-full bg-ember" />
          </span>
          available for product engineering work
        </div>

        <div className="mt-8 flex flex-col gap-10 md:flex-row md:items-end">
          <div className="min-w-0 flex-1">
            <h1 className="font-mono text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              I turn fuzzy
              <br />
              requirements into
              <br />
              <span className="text-ember">shipped products.</span>
              <span className="animate-cursor-blink text-ember">_</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              I&apos;m{" "}
              <strong className="font-semibold text-foreground">
                Chetan Bhosale
              </strong>
              , a product engineer who sits between clients, design teams, and
              the codebase. Currently a{" "}
              <strong className="font-semibold text-foreground">
                founding engineer
              </strong>{" "}
              at{" "}
              <LinkPreview
                url="https://www.linkrunner.io"
                className="inline-flex items-center gap-1.5 align-baseline font-semibold text-foreground underline decoration-ember/60 underline-offset-4 transition-colors hover:decoration-ember"
                preview={
                  <div className="w-80 overflow-hidden rounded-xl border border-border bg-popover shadow-2xl">
                    <Image
                      src="/image/linkrunner-site.png"
                      alt="Linkrunner website preview"
                      width={1200}
                      height={630}
                      className="w-full border-b border-border"
                    />
                    <div className="p-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/image/linkrunner-icon.png"
                          alt="Linkrunner logo"
                          width={36}
                          height={36}
                          className="rounded-lg"
                        />
                        <div>
                          <p className="font-mono text-sm font-semibold">
                            Linkrunner
                          </p>
                          <p className="text-xs text-muted-foreground">
                            linkrunner.io · Bengaluru, India
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        AI-driven mobile measurement partner covering
                        attribution, deep links, SKAN postbacks, cohorts, and
                        campaign analytics for mobile growth teams.
                      </p>
                      <ul className="mt-3 space-y-1.5 font-mono text-xs text-muted-foreground">
                        <li className="flex gap-2">
                          <span className="text-ember">▸</span>
                          <span>
                            raised{" "}
                            <span className="font-semibold text-foreground">
                              $565K
                            </span>{" "}
                            pre-seed, led by Titan Capital
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-ember">▸</span>
                          <span>
                            attribution systems trusted by{" "}
                            <span className="font-semibold text-foreground">
                              100+ growth teams
                            </span>
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-ember">▸</span>
                          <span>SOC 2 Type 2 · GDPR · ISO 27001</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                }
              >
                <Image
                  src="/image/linkrunner-icon.png"
                  alt="Linkrunner logo"
                  width={18}
                  height={18}
                  className="rounded-[5px]"
                />
                Linkrunner
              </LinkPreview>
              , building attribution systems for growth teams.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#work"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 font-mono text-sm font-semibold transition-all hover:border-ember/50 hover:text-ember"
              >
                view work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-ember/50 bg-ember/10 px-4 py-2 font-mono text-sm font-semibold transition-all hover:border-ember hover:bg-ember/20"
              >
                get in touch
              </Link>
            </div>
          </div>

          <Tilt className="w-full shrink-0 overflow-hidden rounded-xl border border-border bg-card shadow-2xl md:w-[38%]">
            <Image
              src="/image/gibli.png"
              alt="Portrait of Chetan Bhosale"
              width={1024}
              height={1536}
              priority
              className="aspect-square w-full object-cover object-[50%_20%] grayscale transition-all duration-500 hover:grayscale-0"
            />
          </Tilt>
        </div>

        <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground">
          Plot twist: I started out in{" "}
          <strong className="font-semibold text-foreground">
            sales and marketing
          </strong>
          , two years of pitching and negotiating for realtors before anyone
          let me near production code. Turns out knowing how to talk to clients
          and read a design file makes building the right thing a lot easier.
        </p>
      </section>
    </>
  )
}
