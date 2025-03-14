import { createFileRoute } from '@tanstack/react-router'
import EgitmenlerPage from '@/features/egitmen'

export const Route = createFileRoute('/_authenticated/egitmenler/')({
  component: EgitmenlerPage,
})
