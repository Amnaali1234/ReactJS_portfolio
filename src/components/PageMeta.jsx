import { usePageMeta } from '../hooks/usePageMeta'

export default function PageMeta({ title, description }) {
  usePageMeta(title, description)
  return null
}
