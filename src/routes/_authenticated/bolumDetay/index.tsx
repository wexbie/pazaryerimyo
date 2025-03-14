import { createFileRoute } from '@tanstack/react-router'
import BolumDetay from '@/features/bolumDetay'

export const Route = createFileRoute('/_authenticated/bolumDetay/')({
  component: BolumDetay,
})
