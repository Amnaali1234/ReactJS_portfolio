import { useState } from 'react'
import { Mail } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../components/SocialIcons'
import PageMeta from '../components/PageMeta'
import SectionHeading from '../components/SectionHeading'
import { site } from '../data/site'

const initial = { name: '', email: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Please enter a valid email address.'
  if (values.subject.trim().length < 3) errors.subject = 'Please add a subject.'
  if (values.message.trim().length < 20) errors.message = 'Please write a message of at least 20 characters.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      return
    }

    setStatus('ready')
  }

  const fieldClass =
    'mt-2 w-full rounded-xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white'

  return (
    <div>
      <PageMeta
        title="Contact | Amna Ali"
        description="Get in touch with Amna Ali about frontend projects, collaboration, or opportunities."
      />
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk about frontend work"
        description="If you would like to discuss a project, a role, or feedback on this portfolio, I would be glad to connect."
      />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-4">
          <article className="glass-panel rounded-2xl p-5">
            <Mail className="text-sky-500" size={20} />
            <h2 className="mt-3 font-display text-lg font-semibold text-slate-900 dark:text-white">Direct contact</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              An email inbox is not wired into this form yet. The fastest way to reach me is GitHub or LinkedIn.
            </p>
          </article>
          <a
            href={site.social.github}
            target="_blank"
            rel="noreferrer"
            className="glass-panel flex items-center gap-4 rounded-2xl p-5 transition hover:border-sky-300"
          >
            <GitHubIcon className="text-sky-500" size={20} />
            <div>
              <p className="font-medium text-slate-900 dark:text-white">GitHub</p>
              <p className="text-sm text-slate-500">github.com/Amnaali1234</p>
            </div>
          </a>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="glass-panel flex items-center gap-4 rounded-2xl p-5 transition hover:border-sky-300"
          >
            <LinkedInIcon className="text-sky-500" size={20} />
            <div>
              <p className="font-medium text-slate-900 dark:text-white">LinkedIn</p>
              <p className="text-sm text-slate-500">linkedin.com/in/amna-ali-5257472ba</p>
            </div>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel space-y-4 rounded-2xl p-6 sm:p-8" noValidate>
          <div>
            <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Name
            </label>
            <input id="name" name="name" value={values.name} onChange={handleChange} className={fieldClass} autoComplete="name" />
            {errors.name ? <p className="mt-1 text-sm text-red-500">{errors.name}</p> : null}
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
            </label>
            <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={fieldClass} autoComplete="email" />
            {errors.email ? <p className="mt-1 text-sm text-red-500">{errors.email}</p> : null}
          </div>
          <div>
            <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Subject
            </label>
            <input id="subject" name="subject" value={values.subject} onChange={handleChange} className={fieldClass} />
            {errors.subject ? <p className="mt-1 text-sm text-red-500">{errors.subject}</p> : null}
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
            </label>
            <textarea id="message" name="message" rows="6" value={values.message} onChange={handleChange} className={fieldClass} />
            {errors.message ? <p className="mt-1 text-sm text-red-500">{errors.message}</p> : null}
          </div>

          <button
            type="submit"
            className="rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
          >
            Validate message
          </button>

          {status === 'error' ? (
            <p className="text-sm text-red-500" role="alert">
              Please fix the highlighted fields and try again.
            </p>
          ) : null}
          {status === 'ready' ? (
            <p className="text-sm text-sky-700 dark:text-sky-300" role="status">
              The form is valid and ready to connect to an email service. Nothing was sent from this
              site. Please reach out on GitHub or LinkedIn for now.
            </p>
          ) : null}
        </form>
      </div>
    </div>
  )
}
