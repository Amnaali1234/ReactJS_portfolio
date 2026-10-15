import { motion, useReducedMotion } from 'framer-motion'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import SkillIcon from '../components/SkillIcon'
import { skillGroups } from '../data/skills'

export default function Skills() {
  const reduceMotion = useReducedMotion()

  return (
    <div>
      <PageMeta
        title="Skills | Amna Ali"
        description="Frontend and tooling skills used by Amna Ali, including React, JavaScript, Tailwind CSS, Git, and Firebase."
      />
      <SectionHeading
        eyebrow="Skills"
        title="Tools I use to design and ship interfaces"
        description="Grouped by the work they support. These are the technologies I practice in coursework and public projects — presented without invented proficiency scores."
      />

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <section key={group.title}>
            <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">{group.title}</h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">{group.description}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.skills.map((skill, index) => (
                <motion.article
                  key={skill.name}
                  initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={reduceMotion ? undefined : { y: -4 }}
                  transition={{ delay: index * 0.04 }}
                  className="glass-panel flex items-center gap-4 rounded-2xl p-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-300">
                    <SkillIcon name={skill.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-slate-900 dark:text-white">{skill.name}</h3>
                </motion.article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
