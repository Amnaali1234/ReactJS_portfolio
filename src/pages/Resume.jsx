import { Download } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { education } from '../data/site'
import { skillGroups } from '../data/skills'

export default function Resume() {
  return (
    <div>
      <PageMeta
        title="Resume | Amna Ali"
        description="Resume overview for Amna Ali, covering frontend skills, education, and a downloadable PDF."
      />
      <SectionHeading
        eyebrow="Resume"
        title="A concise snapshot of skills, education, and current focus"
        description="This page stays aligned with confirmed information only. Employment history can be added when you have roles to list."
      />

      <div className="mb-8">
        <a
          href="/Amna-Ali-Resume.pdf"
          download
          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400"
        >
          <Download size={16} /> Download Resume
        </a>
      </div>

      <div className="space-y-6">
        <section className="glass-panel rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Profile</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Frontend developer based in Karachi, focused on React, JavaScript, and responsive UI.
            Currently training in Modern Web & App Development at SMIT and building public projects
            that demonstrate layout, interaction, and component-based interfaces.
          </p>
        </section>

        <section className="glass-panel rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Technical skills</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-300">
                  {group.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {group.skills.map((skill) => skill.name).join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Education</h2>
          <div className="mt-5 space-y-5">
            {education.map((item) => (
              <div key={item.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-medium text-slate-900 dark:text-white">{item.title}</h3>
                  <span className="text-xs text-slate-500">{item.period}</span>
                </div>
                <p className="text-sm text-slate-500">
                  {item.org} · {item.place}
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">Experience</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Independent project work and coursework currently make up the practical experience
            shown in this portfolio. Formal employment, internships, or freelance roles can be
            listed here as they are added.
          </p>
        </section>
      </div>
    </div>
  )
}
