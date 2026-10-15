import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import ThemeToggle from './ThemeToggle'

function getNavTarget(item) {
  return item.path === '/' ? '/' : `/#${item.path.slice(1)}`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduceMotion = useReducedMotion()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (item) =>
    location.pathname === '/' &&
    (item.path === '/' ? !location.hash : location.hash === `#${item.path.slice(1)}`)

  const linkClass = (active) =>
    `relative px-1 py-1 text-sm font-medium transition ${
      active
        ? 'text-sky-600 dark:text-sky-300'
        : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
    } after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-sky-400 after:transition after:content-[''] ${
      active ? 'after:scale-x-100' : 'hover:after:scale-x-100'
    }`

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${
        scrolled
          ? 'border-slate-200/80 bg-[#f4f6f8]/85 backdrop-blur-xl dark:border-white/10 dark:bg-[#08090c]/80'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-display text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          Amna Ali
          <span className="ml-1 text-sky-500">.</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {site.nav.map((item) => {
            const active = isActive(item)
            return (
              <Link
                key={item.path}
                to={getNavTarget(item)}
                aria-current={active ? 'location' : undefined}
                className={linkClass(active)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            to="/#contact"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-800 dark:border-white/10 dark:text-white"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-[#f4f6f8] lg:hidden dark:border-white/10 dark:bg-[#0c0d12]"
          >
            <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
              {site.nav.map((item) => {
                const active = isActive(item)
                return (
                  <Link
                    key={item.path}
                    to={getNavTarget(item)}
                    aria-current={active ? 'location' : undefined}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-3 text-base font-medium ${
                      active
                        ? 'bg-sky-500/10 text-sky-600 dark:text-sky-300'
                        : 'text-slate-700 dark:text-slate-200'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
