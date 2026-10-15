import { useMemo, useState } from 'react'
import PageMeta from '../components/PageMeta'
import ProjectCard from '../components/ProjectCard'
import SectionHeading from '../components/SectionHeading'
import { projectFilters, projects } from '../data/projects'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((project) => project.category === filter)
  }, [filter])

  return (
    <div>
      <PageMeta
        title="Projects | Amna Ali"
        description="Selected frontend projects by Amna Ali, including React apps, JavaScript tools, and HTML/CSS websites."
      />
      <SectionHeading
        eyebrow="Projects"
        title="Selected work from practice, coursework, and public demos"
        description="Filter by stack. Each card links to a details page. Live and GitHub links are included when a public URL exists."
      />

      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
        {projectFilters.map((item) => {
          const active = filter === item.id
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active
                  ? 'bg-sky-500 text-slate-950'
                  : 'border border-slate-200 text-slate-600 hover:border-sky-300 dark:border-white/10 dark:text-slate-300'
              }`}
            >
              {item.label}
            </button>
          )
        })}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
