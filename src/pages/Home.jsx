import { motion, useReducedMotion } from 'framer-motion'
import { useEffect } from 'react'
import { ArrowDown } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import PageMeta from '../components/PageMeta'
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons'
import {
  AboutSection,
  ContactSection,
  FeaturedProjectsSection,
  ResumeSection,
  SkillsSection,
} from '../components/HomeSections'
import TypingText from '../components/TypingText'
import { site } from '../data/site'

const badges = ['React', 'JavaScript', 'Tailwind CSS', 'Git']

export default function Home() {
  const reduceMotion = useReducedMotion()
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return undefined

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(location.hash.slice(1)))
      if (!target) return
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'
      target.scrollIntoView({ behavior, block: 'start' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.hash, location.pathname])

  return (
    <>
      <PageMeta
        title="Amna Ali | Frontend Developer"
        description="Amna Ali is a frontend developer building clean, responsive interfaces with React and JavaScript."
      />
      <section className="relative min-h-[calc(100svh-8rem)]">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">

      <div>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 dark:text-sky-300"
        >
          Hello, I'm
        </motion.p>
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mt-3 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white"
        >
          Amna Ali
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-xl text-slate-700 sm:text-2xl dark:text-slate-200"
        >
          Frontend Developer
        </motion.p>
        <p className="mt-2 min-h-7 text-base text-sky-600 dark:text-sky-300">
          <TypingText phrases={site.titles.slice(1)} />
        </p>
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-400"
        >
          I design and build responsive web interfaces with a focus on clean structure, thoughtful
          interaction, and a polished visual finish. Currently studying Modern Web & App Development
          at SMIT in Karachi, and turning that learning into public frontend projects.
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/projects"
            className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            View My Projects
          </Link>
          <Link
            to="/contact"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-sky-400 hover:text-sky-600 dark:border-white/15 dark:text-white"
          >
            Contact Me
          </Link>
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 dark:border-white/10 dark:text-slate-200"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
        </motion.div>

        <div className="mt-8 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto w-full max-w-sm"
      >
        <div className="absolute -inset-4 rounded-[2rem] bg-sky-400/20 blur-2xl dark:bg-sky-400/15" />
        <div className="relative overflow-hidden rounded-[1.7rem] border border-sky-300/40 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-8 text-center shadow-2xl">
         
<div className="relative mx-auto h-64 w-64 md:h-72 md:w-72">
  {/* Soft Background Glow */}
  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-sky-500 opacity-30 blur-xl"></div>
  
  {/* Main Circular Profile Image Container */}
  <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-cyan-400/50 bg-slate-900 shadow-[0_0_50px_rgba(6,182,212,0.3)] transition-transform duration-300 hover:scale-105">
    <img
      src="/amna-profile.jpg"
      alt="Amna Ali"
      className="h-full w-full object-cover"
    />
  </div>
</div>

          <p className="mt-6 font-display text-2xl font-semibold text-white">Amna Ali</p>
          <p className="mt-1 text-sm text-sky-200">Frontend Developer</p>
        </div>
      </motion.div>
      </div>

      <a
        href="#about"
        onClick={(event) => {
          event.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth' })
        }}
        className="absolute bottom-2 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500 lg:flex"
      >
        Scroll
        <ArrowDown className={reduceMotion ? '' : 'animate-bounce'} size={16} />
      </a>

      <div id="highlights" className="sr-only">
        Page highlights
      </div>
      </section>
      <div className="space-y-20 sm:space-y-28">
        <AboutSection />
        <SkillsSection />
        <FeaturedProjectsSection />
        <ResumeSection />
        <ContactSection />
      </div>
    </>
  )
}
