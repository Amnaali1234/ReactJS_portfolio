import {
  Calculator,
  Clock,
  CloudSun,
  Dices,
  FileText,
  Fuel,
  Layers,
  LayoutTemplate,
  ListTodo,
  LockKeyhole,
  Palette,
  Plus,
  Recycle,
  Search,
  Smile,
  Store,
  UserCheck,
  Vote,
} from 'lucide-react'

const icons = {
  Calculator,
  Clock,
  CloudSun,
  Dices,
  FileText,
  Fuel,
  Layers,
  LayoutTemplate,
  ListTodo,
  LockKeyhole,
  Palette,
  Plus,
  Recycle,
  Search,
  Smile,
  Store,
  UserCheck,
  Vote,
}

export default function ProjectPreview({ project, className = '' }) {
  const Icon = icons[project.icon] ?? FileText
  const accentColor = project.accent || '#38bdf8'

  return (
    <div
      className={`relative overflow-hidden transition-colors duration-300 ${className}`}
      style={{
        background: `linear-gradient(135deg, ${accentColor}18 0%, ${accentColor}08 100%)`,
      }}
    >
      {/* Subtle Background Glow */}
      <div
        className="absolute -top-10 -right-10 h-28 w-28 rounded-full blur-2xl opacity-30 dark:opacity-40"
        style={{ backgroundColor: accentColor }}
      />

      <div className="relative flex h-full items-center justify-between p-4">
        <div
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200/60 bg-white/80 text-slate-800 shadow-sm backdrop-blur-md dark:border-white/15 dark:bg-white/10 dark:text-white"
          style={{ boxShadow: `0 4px 14px ${accentColor}25` }}
        >
          <Icon size={20} style={{ color: accentColor }} />
        </div>

        <span
          className="rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider shadow-2xl"
          style={{
            borderColor: `${accentColor}40`,
            color: accentColor,
            backgroundColor: `${accentColor}12`,
          }}
        >
          {project.category ? project.category.replace('-', ' / ') : 'Project'}
        </span>
      </div>
    </div>
  )
}