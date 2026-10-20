"use client"

import * as React from "react"

type Mode = "walk" | "work" | "wave"

const workLines = [
  "git push origin main",
  "fixing kafka lag...",
  "kubectl get pods",
  "SELECT * FROM chai",
  "it works on my machine",
  "one more PR",
  "reading the logs",
]

const waveLines = [
  "hey! 👋",
  "hire me maybe?",
  "don't tell my PM",
  "3x karate gold, careful",
]

const SIZE = 56
const SPEED = 42

function pick(lines: string[]) {
  return lines[Math.floor(Math.random() * lines.length)]
}

function Nerd({ mode }: { mode: Mode }) {
  const walking = mode === "walk"
  const working = mode === "work"

  return (
    <svg
      viewBox="0 0 40 56"
      width={SIZE}
      height={(SIZE * 56) / 40}
      className={walking ? "mascot-bob" : undefined}
      aria-hidden
    >
      <ellipse cx="20" cy="54.5" rx="11" ry="1.5" fill="rgba(0,0,0,0.5)" />

      <g className={walking ? "mascot-leg" : undefined}>
        <rect x="14" y="39" width="4.5" height="11" rx="1.5" fill="#18181b" />
        <rect x="13" y="49" width="7" height="3.5" rx="1.5" fill="#f4f4f5" />
      </g>
      <g className={walking ? "mascot-leg mascot-leg-alt" : undefined}>
        <rect x="21.5" y="39" width="4.5" height="11" rx="1.5" fill="#3f3f46" />
        <rect x="20.5" y="49" width="7" height="3.5" rx="1.5" fill="#e4e4e7" />
      </g>

      <rect x="11" y="24" width="18" height="18" rx="5" fill="#3f3f46" />
      <rect x="11" y="24" width="18" height="5" rx="2.5" fill="#52525b" />
      <path d="M17 29 L20 33 L23 29" stroke="#a1a1aa" strokeWidth="1" fill="none" />

      {working ? (
        <>
          <rect x="24" y="30" width="10" height="3.5" rx="1.75" fill="#27272a" />
          <path d="M20 39 L37 39" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" />
          <path d="M35.5 39 L39 28" stroke="#d4d4d8" strokeWidth="2" strokeLinecap="round" />
          <path d="M36.6 37 L38.8 30.5" stroke="#e4e4e7" strokeWidth="1" className="mascot-screen" />
        </>
      ) : (
        <g className={walking ? "mascot-arm" : mode === "wave" ? "mascot-wave" : undefined}>
          <rect x="24.5" y="26" width="4" height="12" rx="2" fill="#27272a" />
          <circle cx="26.5" cy="38.5" r="2" fill="#f2c29b" />
        </g>
      )}

      <circle cx="20" cy="15" r="9" fill="#f2c29b" />
      <path
        d="M10.5 15 Q9.5 4.5 20 4.5 Q30.5 4.5 29.5 14 L27 10.5 L24.5 12.5 L22 9.5 L19 12 L16 9.5 L13.5 12.5 Z"
        fill="#18181b"
      />
      <circle cx="17" cy="16" r="3.1" fill="rgba(255,255,255,0.12)" stroke="#e4e4e7" strokeWidth="1.1" />
      <circle cx="24.4" cy="16" r="3.1" fill="rgba(255,255,255,0.12)" stroke="#e4e4e7" strokeWidth="1.1" />
      <path d="M20.1 16 L21.3 16" stroke="#e4e4e7" strokeWidth="1" />
      <circle cx="17.6" cy="16.2" r="0.9" fill="#18181b" className="mascot-blink" />
      <circle cx="25" cy="16.2" r="0.9" fill="#18181b" className="mascot-blink" />
      <path
        d={mode === "wave" ? "M19 20.5 Q21.5 23 24 20.5" : "M19.5 21 L23.5 21"}
        stroke="#7c4a2d"
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Mascot() {
  const wrapRef = React.useRef<HTMLDivElement>(null)
  const state = React.useRef({ x: 24, dir: 1, mode: "walk" as Mode })
  const changeRef = React.useRef<(next: Mode, ms: number | null) => void>(
    () => {}
  )
  const [mode, setMode] = React.useState<Mode>("walk")
  const [dir, setDir] = React.useState(1)
  const [bubble, setBubble] = React.useState<string | null>(null)

  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    let frame = 0

    const change = (next: Mode, ms: number | null) => {
      state.current.mode = next
      setMode(next)
      setBubble(
        next === "work" ? pick(workLines) : next === "wave" ? pick(waveLines) : null
      )
      clearTimeout(timer)
      if (ms === null) return
      timer = setTimeout(() => {
        if (next === "walk") {
          change("work", 4500)
          return
        }
        if (Math.random() < 0.35) {
          state.current.dir *= -1
          setDir(state.current.dir)
        }
        change("walk", 6000 + Math.random() * 6000)
      }, ms)
    }

    const place = () => {
      if (wrapRef.current) {
        wrapRef.current.style.transform = `translateX(${state.current.x}px)`
      }
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      state.current.x = window.innerWidth - SIZE - 24
      place()
      changeRef.current = (next) => change(next, null)
      timer = setTimeout(() => change("work", null), 0)
      return () => clearTimeout(timer)
    }

    changeRef.current = change
    state.current.x = 24 + Math.random() * (window.innerWidth / 2)
    place()
    timer = setTimeout(() => change("walk", 7000), 0)

    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      const s = state.current
      if (s.mode === "walk") {
        const max = window.innerWidth - SIZE - 16
        s.x += s.dir * SPEED * dt
        if (s.x <= 16 || s.x >= max) {
          s.x = Math.max(16, Math.min(s.x, max))
          s.dir *= -1
          setDir(s.dir)
        }
        place()
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(timer)
    }
  }, [])

  return (
    <div
      ref={wrapRef}
      className="pointer-events-none fixed bottom-0 left-0 z-50 hidden sm:block"
      style={{ transform: "translateX(24px)" }}
    >
      {bubble && (
        <div className="absolute bottom-full left-1/2 mb-1 -translate-x-1/2 animate-in fade-in zoom-in-90 rounded-lg border border-white/15 bg-zinc-900/95 px-2.5 py-1 font-mono text-[11px] whitespace-nowrap text-zinc-200 shadow-lg duration-200">
          {bubble}
        </div>
      )}
      <button
        type="button"
        onClick={() => changeRef.current("wave", 2200)}
        aria-label="Say hi to the mascot"
        className="pointer-events-auto block cursor-pointer"
        style={{ transform: `scaleX(${dir})` }}
      >
        <Nerd mode={mode} />
      </button>
    </div>
  )
}
