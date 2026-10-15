import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDownToLine, ArrowUpRight, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import SkillIcon from './SkillIcon'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { projects, isPlaceholderUrl } from '../data/projects'
import { education, site } from '../data/site'

const featuredProjects = projects
  .filter((project) => !isPlaceholderUrl(project.liveUrl) && !isPlaceholderUrl(project.githubUrl))
  .slice(0, 3)

const skills = [
  { name: 'HTML', icon: 'Html' },
  { name: 'CSS', icon: 'Css' },
  { name: 'Bootstrap', icon: 'Bootstrap' },
  { name: 'JavaScript', icon: 'Javascript' },
  { name: 'React.js', icon: 'React' },
  { name: 'Tailwind CSS', icon: 'Tailwind' },
  { name: 'Git', icon: 'Git' },
  { name: 'Firebase', icon: 'Firebase' },
]

function LandingSection({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 border-t border-slate-200/80 pt-16 dark:border-white/10 sm:pt-20">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} headingId={`${id}-heading`} headingLevel="h2" />
      {children}
    </section>
  )
}

export function AboutSection() {
  return (
    <LandingSection
      id="about"
      eyebrow="About me"
      title="Building thoughtful experiences for the web"
      description="I’m Amna Ali, a frontend developer in Karachi who enjoys turning ideas and designs into clear, responsive interfaces."
    >
      <div className="glass-panel grid gap-6 rounded-2xl p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">My learning journey</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            {education[0].detail} At SMIT, I’m growing from core web foundations into modern
            application development and putting each new concept into practice through personal
            projects.
          </p>
        </div>
        <p className="rounded-xl border border-sky-400/20 bg-sky-400/5 px-4 py-3 text-sm text-slate-700 dark:text-slate-200">
          <span className="block font-semibold text-sky-700 dark:text-sky-300">{education[0].org}</span>
          <span className="mt-1 block">{education[0].title} · {education[0].period}</span>
        </p>
      </div>
    </LandingSection>
  )
}

export function SkillsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <LandingSection
      id="skills"
      eyebrow="Skills"
      title="Tools I use to bring interfaces to life"
      description="A growing frontend toolkit, practiced through coursework and hands-on projects."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.article
            key={skill.name}
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: reduceMotion ? 0 : index * 0.04 }}
            className="glass-panel flex min-h-24 items-center gap-3 rounded-2xl p-4"
          >
            <SkillIcon name={skill.icon} className="h-6 w-6 shrink-0 text-sky-500" />
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">{skill.name}</h3>
          </motion.article>
        ))}
      </div>
    </LandingSection>
  )
}

export function FeaturedProjectsSection() {
  const reduceMotion = useReducedMotion()

  return (
    <LandingSection
      id="projects"
      eyebrow="Featured projects"
      title="A few things I’ve built"
      description="Selected work with live demos and source code available to explore."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.slug}
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: reduceMotion ? 0 : index * 0.05 }}
            className="glass-panel flex h-full flex-col rounded-2xl p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-300">
              {project.technologies.join(' · ')}
            </p>
            <h3 className="mt-3 font-display text-xl font-semibold text-slate-900 dark:text-white">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {project.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-sky-700 hover:text-sky-500 dark:text-sky-300"
              >
                Live demo <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-sky-600 dark:text-slate-200"
              >
                GitHub <GitHubIcon size={15} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="mt-7">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 px-5 py-2.5 text-sm font-semibold text-sky-700 transition hover:bg-sky-400/10 dark:text-sky-300"
        >
          View All Projects <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </LandingSection>
  )
}

export function ResumeSection() {
  return (
    <LandingSection
      id="resume"
      eyebrow="Resume"
      title="A snapshot of my experience and learning"
      description="Explore my frontend skills, ongoing SMIT training, and independent project work."
    >
      <div className="glass-panel flex flex-col gap-5 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
          My resume brings together the technologies I’m learning and the projects where I’m
          applying them. Download the PDF for a concise overview.
        </p>
        <a
          href="/Amna-Ali-Resume.pdf"
          download
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
        >
          <ArrowDownToLine size={16} aria-hidden="true" /> Download CV
        </a>
      </div>
    </LandingSection>
  )
}

export function ContactSection() {
  return (
    <LandingSection
      id="contact"
      eyebrow="Contact"
      title="Let’s connect"
      description="Interested in frontend work, collaboration, or sharing feedback? Find me on GitHub or LinkedIn."
    >
      <div className="glass-panel flex flex-col gap-6 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <p className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
          <MapPin size={17} className="text-sky-500" aria-hidden="true" />
          {site.location}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/15 dark:text-white dark:hover:text-sky-300"
          >
            <GitHubIcon size={17} /> GitHub
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/15 dark:text-white dark:hover:text-sky-300"
          >
            <LinkedInIcon size={17} /> LinkedIn
          </a>
        </div>
      </div>
    </LandingSection>
  )
}
