import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUp,
  IconCircle,
  IconCircleCheck,
  IconCircleX,
  IconExclamationCircle,
  IconStopwatch,
} from '@tabler/icons-react'

export const labels = [
  {
    value: 'yakinda',
    label: 'Yakında',
  }
]
export const statuses = [
  {
    value: 'beklemede',
    label: 'Beklemede',
    icon: IconExclamationCircle,
  },
  {
    value: 'yapılacak',
    label: 'Yapılacak',
    icon: IconCircle,
  },
  {
    value: 'islemde',
    label: 'İşlemde',
    icon: IconStopwatch,
  },
  {
    value: 'tamamlandi',
    label: 'Tamamlandı',
    icon: IconCircleCheck,
  },
  {
    value: 'iptal edildi',
    label: 'İptal Edildi',
    icon: IconCircleX,
  },
]

export const priorities = [
  {
    label: 'Düşük',
    value: 'dusuk',
    icon: IconArrowDown,
  },
  {
    label: 'Orta',
    value: 'orta',
    icon: IconArrowRight,
  },
  {
    label: 'Yüksek',
    value: 'yuksek',
    icon: IconArrowUp,
  },
]
