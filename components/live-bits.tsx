"use client"

import * as React from "react"

const commands = [
  "shipping at respan",
  "git push origin main",
  "kubectl get pods -A",
  "fixing kafka lag",
  "brewing chai",
  "npm run vibes",
]

export function TerminalTicker() {
  const [text, setText] = React.useState("")

  React.useEffect(() => {
    let index = 0
    let chars = 0
    let deleting = false
    let timeout: ReturnType<typeof setTimeout>

    const step = () => {
      const word = commands[index]
      if (!deleting) {
        chars += 1
        setText(word.slice(0, chars))
        if (chars === word.length) {
          deleting = true
          timeout = setTimeout(step, 1800)
          return
        }
      } else {
        chars -= 1
        setText(word.slice(0, chars))
        if (chars === 0) {
          deleting = false
          index = (index + 1) % commands.length
        }
      }
      timeout = setTimeout(step, deleting ? 35 : 70)
    }
    timeout = setTimeout(step, 400)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <span className="font-mono text-xs">
      <span className="text-subtle">chetan $ </span>
      <span className="text-foreground">{text}</span>
      <span className="ml-0.5 inline-block h-[1em] w-[0.45em] translate-y-[2px] animate-pulse bg-muted-foreground" />
    </span>
  )
}

export function BengaluruClock() {
  const [now, setNow] = React.useState<Date | null>(null)

  React.useEffect(() => {
    const tick = () => setNow(new Date())
    const first = setTimeout(tick, 0)
    const id = setInterval(tick, 1000)
    return () => {
      clearTimeout(first)
      clearInterval(id)
    }
  }, [])

  if (!now) return null

  return (
    <span className="font-mono tabular-nums">
      {now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })}{" "}
      IST
    </span>
  )
}
