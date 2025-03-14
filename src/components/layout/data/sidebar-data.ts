import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconSchool,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
} from '@tabler/icons-react'
import { GraduationCap } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'wexbie',
    email: 'eyupaslnn00@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Pazaryeri MYO',
      logo: GraduationCap,
      plan: 'Öğrenciler İçin',
    }
  ],
  navGroups: [
    {
      title: 'Genel',
      items: [
        {
          title: 'Anasayfa',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Bölümler',
          url: '/bolumler',
          icon: IconSchool,
        },
        {
          title: 'Eğitmenler',
          url: '/egitmenler',
          icon: IconUserCog,
        },
        {
          title: 'Görevler',
          url: '/tasks',
          icon: IconChecklist,
        },
        {
          title: 'Uygulamalar',
          url: '/apps',
          icon: IconPackages,
        },
        {
          title: 'Sohbetler',
          url: '/chats',
          badge: '3',
          icon: IconMessages,
        },
        {
          title: 'Bölüm Detay',
          url: '/bolumDetay',
          badge: '3',
          icon: IconMessages,
        },
        {
          title: 'Kullanıcılar',
          url: '/users',
          icon: IconUsers,
        },
      ],
    },
    {
      title: 'Sayfalar',
      items: [
        {
          title: 'Giriş',
          icon: IconLockAccess,
          items: [
            {
              title: 'Giriş Yap',
              url: '/sign-in',
            },
            {
              title: 'Giriş Yap (2 Sütun)',
              url: '/sign-in-2',
            },
            {
              title: 'Kayıt Ol',
              url: '/sign-up',
            },
            {
              title: 'Şifremi Unuttum',
              url: '/forgot-password',
            },
            {
              title: '2 Faktörlü Kimlik Doğrulama',
              url: '/otp',
            },
          ],
        },
        {
          title: 'Hatalar',
          icon: IconBug,
          items: [
            {
              title: 'Yetkisiz Erişim',
              url: '/401',
              icon: IconLock,
            },
            {
              title: 'Engellendi',
              url: '/403',
              icon: IconUserOff,
            },
            {
              title: 'Bulunamadı',
              url: '/404',
              icon: IconError404,
            },
            {
              title: 'Sunucu Hatası',
              url: '/500',
              icon: IconServerOff,
            },
            {
              title: 'Bakım Hatası',
              url: '/503',
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },
    {
      title: 'Diğer',
      items: [
        {
          title: 'Ayarlar',
          icon: IconSettings,
          items: [
            {
              title: 'Profil',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Hesap',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Görünüm',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Bildirimler',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Görünüm',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'Yardım Merkezi',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}