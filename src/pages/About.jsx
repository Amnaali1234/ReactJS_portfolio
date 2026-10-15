import { motion, useReducedMotion } from 'framer-motion'
import { Code2, Layout, Sparkles } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { education } from '../data/site'

const cards = [
  {
    title: 'Frontend focus',
    body: 'I work on the visible layer of the web: structure, layout, interaction, and the details that make an interface feel considered.',
  },
  {
    title: 'Learning in public',
    body: 'Coursework at SMIT is paired with GitHub projects, so each concept is practiced in a real page or component rather than only in notes.',
  },
  {
    title: 'Problem-solving style',
    body: 'I break interfaces into small pieces, check how they behave on different screens, and refine until the layout and interaction feel stable.',
  },
]

const strengths = [
  {
    icon: Code2,
    title: 'Clean code',
    body: 'Readable markup and components, with structure that is easier to extend later.',
  },
  {
    icon: Layout,
    title: 'Responsive design',
    body: 'Layouts that stay usable from phones to large desktops without horizontal overflow.',
  },
  {
    icon: Sparkles,
    title: 'User-focused interfaces',
    body: 'Clear hierarchy, accessible controls, and interactions that support the task instead of competing with it.',
  },
]

export default function About() {
  const reduceMotion = useReducedMotion()

  return (
    <div>
      <PageMeta
        title="About | Amna Ali"
        description="Learn about Amna Ali’s frontend development journey, learning path, and approach to building interfaces."
      />
      <SectionHeading
        eyebrow="About"
        title="A frontend developer focused on clear, modern interfaces"
        description="I am building a career in frontend development through structured training and a growing body of public web projects."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <article className="glass-panel rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Introduction</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            I am Amna Ali, a frontend developer based in Karachi. I enjoy turning layouts into
            working pages — from landing sections and utility tools to React components with
            predictable state. My current work sits at the intersection of visual design and
            practical JavaScript.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Web development holds my attention because small decisions in markup, spacing, and
            interaction change how people use a product. I like the loop of designing a screen,
            implementing it, and then tightening the details until it feels finished.
          </p>
        </article>

        <article className="glass-panel rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Journey</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            I am a student in the Modern Web & App Development program at Saylani Mass IT Training
            (SMIT). The path has moved from HTML and CSS foundations into JavaScript, Bootstrap,
            and React. Alongside classes, I publish projects on GitHub so the learning stays
            visible and reusable.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Continuous learning is part of the process: each project is a chance to practice a
            clearer layout, a more stable interaction, or a cleaner component structure.
          </p>
        </article>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.06 }}
            className="glass-panel rounded-2xl p-5"
          >
            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">{card.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">{card.body}</p>
          </motion.article>
        ))}
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Learning timeline</h2>
        <ol className="relative mt-8 space-y-6 border-l border-slate-200 pl-6 dark:border-white/10">
          {education.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-sky-400" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-300">
                {item.period}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <p className="text-sm text-slate-500">
                {item.org} · {item.place}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">What I bring</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {strengths.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="glass-panel rounded-2xl p-5">
                <Icon className="text-sky-500" size={22} />
                <h3 className="mt-4 font-display text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.body}</p>
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}