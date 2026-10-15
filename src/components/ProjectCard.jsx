import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { GitHubIcon } from './SocialIcons'
import { Link } from 'react-router-dom'
import { isPlaceholderUrl } from '../data/projects'
import ProjectPreview from './ProjectPreview'

export default function ProjectCard({ project, index = 0 }) {
  const reduceMotion = useReducedMotion()
  const liveSoon = isPlaceholderUrl(project.liveUrl)
  const gitSoon = isPlaceholderUrl(project.githubUrl)

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.04 }}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm transition-all duration-300 hover:border-sky-400/80 hover:shadow-md dark:border-white/10 dark:bg-slate-900/90 dark:backdrop-blur-xl dark:hover:border-sky-500/40"
    >
      <Link to={`/projects/${project.slug}`} className="block border-b border-slate-100 dark:border-white/5">
        <ProjectPreview project={project} className="h-28" />
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
          <Link to={`/projects/${project.slug}`} className="transition-colors hover:text-sky-500">
            {project.title}
          </Link>
        </h3>

        <p className="mt-1.5 flex-1 text-xs leading-relaxed text-slate-600 line-clamp-2 dark:text-slate-400">
          {project.summary}
        </p>

        {/* Technologies Badges */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-4 flex items-center gap-4 pt-3 border-t border-slate-100 dark:border-white/5">
          {liveSoon ? (
            <span className="text-[11px] italic text-slate-400">Live demo coming soon</span>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-600 hover:text-sky-500 dark:text-sky-400"
            >
              Live Demo <ArrowUpRight size={14} />
            </a>
          )}

          {gitSoon ? (
            <span className="text-[11px] italic text-slate-400">GitHub coming soon</span>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-sky-600 dark:text-slate-200"
            >
              GitHub <GitHubIcon size={14} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}