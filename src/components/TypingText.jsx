import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export default function TypingText({ phrases, className = '' }) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(phrases[0] ?? '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion) {
      setText(phrases[0] ?? '')
      return undefined
    }

    const current = phrases[index % phrases.length]
    const delay = deleting ? 40 : text === current ? 1400 : 70

    const timer = window.setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setDeleting(true)
        return
      }

      const next = current.slice(0, Math.max(0, text.length - 1))
      setText(next)
      if (next.length === 0) {
        setDeleting(false)
        setIndex((value) => (value + 1) % phrases.length)
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [deleting, index, phrases, reduceMotion, text])

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[1px] animate-pulse bg-sky-400 align-middle">
        &nbsp;
      </span>
    </span>
  )
}
