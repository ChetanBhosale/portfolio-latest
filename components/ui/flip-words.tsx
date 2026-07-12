"use client"

import * as React from "react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

export function FlipWords({
  words,
  duration = 2600,
  className,
}: {
  words: string[]
  duration?: number
  className?: string
}) {
  const [currentWord, setCurrentWord] = React.useState(words[0])
  const [isAnimating, setIsAnimating] = React.useState(false)

  const startAnimation = React.useCallback(() => {
    const next = words[words.indexOf(currentWord) + 1] ?? words[0]
    setCurrentWord(next)
    setIsAnimating(true)
  }, [currentWord, words])

  React.useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(startAnimation, duration)
      return () => clearTimeout(timeout)
    }
  }, [isAnimating, duration, startAnimation])

  return (
    <AnimatePresence onExitComplete={() => setIsAnimating(false)}>
      <motion.span
        key={currentWord}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: -24,
          x: 24,
          scale: 1.2,
          filter: "blur(8px)",
          position: "absolute",
        }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className={cn("relative z-10 inline-block", className)}
      >
        {currentWord.split(" ").map((word, wordIndex) => (
          <motion.span
            key={`${word}-${wordIndex}`}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: wordIndex * 0.1, duration: 0.3 }}
            className="inline-block whitespace-nowrap"
          >
            {word}
            {wordIndex < currentWord.split(" ").length - 1 && " "}
          </motion.span>
        ))}
      </motion.span>
    </AnimatePresence>
  )
}
