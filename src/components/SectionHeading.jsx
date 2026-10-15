import { motion, useReducedMotion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  headingId,
  headingLevel = 'h1',
}) {
  const reduceMotion = useReducedMotion()
  const alignment = align === 'center' ? 'mx-auto text-center' : ''
  const Heading = headingLevel

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-10 max-w-2xl ${alignment}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-600 dark:text-sky-300">
          {eyebrow}
        </p>
      ) : null}
      <Heading id={headingId} className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
        {title}
      </Heading>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">{description}</p>
      ) : null}
    </motion.div>
  )
}
