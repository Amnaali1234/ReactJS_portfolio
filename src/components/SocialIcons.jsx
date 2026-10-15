import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export function GitHubIcon({ size = 18, className = '' }) {
  return <FaGithub size={size} className={className} aria-hidden="true" />
}

export function LinkedInIcon({ size = 18, className = '' }) {
  return <FaLinkedinIn size={size} className={className} aria-hidden="true" />
}
