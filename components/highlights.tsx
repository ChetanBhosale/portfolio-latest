import { FlipWords } from "@/components/ui/flip-words"

const flipWords = [
  "side projects",
  "scalable backends",
  "infra code",
  "analytics",
  "ai systems",
]

export function Highlights() {
  return (
    <section className="border-t border-dashed py-8">
      <p className="font-mono text-xl font-bold tracking-tight sm:text-2xl">
        currently building{" "}
        <FlipWords words={flipWords} className="text-ember" />
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        From the product experience to the API behind it to the infrastructure
        underneath, I ship the whole thing end to end.
      </p>
    </section>
  )
}
