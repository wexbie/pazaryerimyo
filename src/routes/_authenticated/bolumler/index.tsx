import { createFileRoute } from '@tanstack/react-router'
import BolumlerPage from '@/features/bolum'

export const Route = createFileRoute('/_authenticated/bolumler/')({
  component: BolumlerPage,
})