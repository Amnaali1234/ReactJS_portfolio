import { Link } from 'react-router-dom'
import PageMeta from '../components/PageMeta'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg py-16 text-center">
      <PageMeta title="Page not found | Amna Ali" description="The requested page does not exist." />
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 dark:text-sky-300">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-slate-900 dark:text-white">Page not found</h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">
        That route is not part of this portfolio. Head back home or browse projects instead.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link to="/" className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950">
          Home
        </Link>
        <Link
          to="/projects"
          className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold dark:border-white/15"
        >
          Projects
        </Link>
      </div>
    </div>
  )
}
