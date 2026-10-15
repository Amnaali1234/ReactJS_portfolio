import { useReducedMotion } from 'framer-motion'

export default function AnimatedBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[#f4f6f8] dark:bg-[#08090c]" />
      <div className="grid-fade absolute inset-0 opacity-80" />
      <div
        className={`absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-400/15 ${
          reduceMotion ? '' : 'animate-pulse'
        }`}
      />
      <div
        className={`absolute -right-16 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl dark:bg-sky-500/10 ${
          reduceMotion ? '' : 'animate-pulse'
        }`}
      />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-slate-400/10 blur-3xl dark:bg-white/5" />
    </div>
  )
}
