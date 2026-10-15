import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { Link } from 'react-router-dom'
import { site } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white/60 dark:border-white/10 dark:bg-black/20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold text-slate-900 dark:text-white">Amna Ali</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600 dark:text-slate-400">{site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Navigate</p>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {site.nav.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-sm text-slate-600 transition hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Connect</p>
          <div className="mt-4 flex gap-3">
            <a
              href={site.social.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:text-slate-200"
              aria-label="GitHub"
            >
              <GitHubIcon size={18} />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-sky-300 hover:text-sky-600 dark:border-white/10 dark:text-slate-200"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 px-4 py-5 text-center text-sm text-slate-500 dark:border-white/10">
        © {year} Amna Ali. All rights reserved.
      </div>
    </footer>
  )
}
