import Image from "next/image"

import { SiteHeader } from "@/components/site-header"
import { LinkPreview } from "@/components/ui/link-preview"
import { Tilt } from "@/components/ui/tilt"

export function Hero() {
  return (
    <>
      <SiteHeader />

      <section className="pb-4">
        <div className="rounded-lg border border-ember/60 bg-ember/10 px-5 py-4 font-mono font-semibold">
          <span className="animate-wave">👋</span> Hi, I am Chetan Bhosale
        </div>

        <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-start">
          <div className="min-w-0 flex-1">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I&apos;m a{" "}
              <strong className="font-semibold text-foreground">
                full stack software engineer
              </strong>{" "}
              who builds products and understands the{" "}
              <strong className="font-semibold text-foreground">
                infrastructure
              </strong>{" "}
              they run on. Weekends are for side projects.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              These days I&apos;m a{" "}
              <strong className="font-semibold text-foreground">
                founding engineer
              </strong>{" "}
              at{" "}
              <LinkPreview
                url="https://www.linkrunner.io"
                className="inline-flex items-center gap-2 align-baseline font-semibold text-foreground underline decoration-ember/60 underline-offset-4 transition-colors hover:decoration-ember"
                preview={
                  <div className="w-80 overflow-hidden rounded-xl border bg-popover shadow-xl ring-1 ring-foreground/10">
                    <Image
                      src="/image/linkrunner-site.png"
                      alt="Linkrunner website preview"
                      width={1200}
                      height={630}
                      className="w-full border-b"
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
                            building attribution systems trusted by{" "}
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


              , where we&apos;re solving the{" "}
              <strong className="font-semibold text-foreground">
                attribution problem
              </strong>{" "}
              and turning marketers into 100x marketers.
            </p>
          </div>

          <Tilt className="w-full shrink-0 overflow-hidden rounded-xl border shadow-xs md:w-2/5">
            <Image
              src="/image/gibli.png"
              alt="Portrait of Chetan Bhosale"
              width={1024}
              height={1536}
              priority
              className="aspect-square w-full object-cover object-[50%_20%]"
            />
          </Tilt>
        </div>

        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          Plot twist: I started out in{" "}
          <strong className="font-semibold text-foreground">
            sales and marketing
          </strong>
          , two years of pitching and negotiating for realtors back in
          college, before anyone let me near production code. Turns out
          knowing how to talk to users makes building for them a lot easier.
        </p>
      </section>
    </>
  )
}
