import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from '../components/SocialIcons'
import { Link, useParams } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import ProjectPreview from '../components/ProjectPreview'
import { getProjectBySlug, isPlaceholderUrl } from '../data/projects'

export default function ProjectDetails() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return (
      <div className="glass-panel rounded-2xl p-8">
        <PageMeta title="Project not found | Amna Ali" description="The requested project could not be found." />
        <h1 className="font-display text-3xl font-semibold text-slate-900 dark:text-white">Project not found</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">That project is not in the current portfolio data.</p>
        <Link to="/projects" className="mt-6 inline-flex items-center gap-2 text-sky-600 dark:text-sky-300">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
      </div>
    )
  }

  const liveSoon = isPlaceholderUrl(project.liveUrl)
  const gitSoon = isPlaceholderUrl(project.githubUrl)

  return (
    <article>
      <PageMeta title={`${project.title} | Amna Ali`} description={project.summary} />
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-sky-600">
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">
            {project.category.replace('-', ' / ')}
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-slate-900 dark:text-white">{project.title}</h1>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-400">{project.overview}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            {liveSoon ? (
              <span className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-500 dark:border-white/10">
                Live demo coming soon
              </span>
            ) : (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400"
              >
                Live Demo <ArrowUpRight size={16} />
              </a>
            )}
            {gitSoon ? (
              <span className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-500 dark:border-white/10">
                GitHub coming soon
              </span>
            ) : (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 dark:border-white/15 dark:text-white"
              >
                GitHub <GitHubIcon size={16} />
              </a>
            )}
          </div>
        </div>

        <ProjectPreview project={project} className="min-h-64" />
      </div>

      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="glass-panel rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Features</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-panel rounded-2xl p-6">
          <h2 className="font-display text-xl font-semibold text-slate-900 dark:text-white">Technologies</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
