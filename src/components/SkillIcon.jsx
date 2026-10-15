import {
  SiBootstrap,
  SiCss,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

const icons = {
  Html: SiHtml5,
  Css: SiCss,
  Javascript: SiJavascript,
  React: SiReact,
  Bootstrap: SiBootstrap,
  Tailwind: SiTailwindcss,
  Git: SiGit,
  Github: SiGithub,
  Firebase: SiFirebase,
  Vite: SiVite,
  Vscode: VscVscode,
}

export default function SkillIcon({ name, className = 'h-6 w-6' }) {
  const Icon = icons[name]
  if (!Icon) return null
  return <Icon className={className} aria-hidden="true" />
}
