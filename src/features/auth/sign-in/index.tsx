import { Link } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { UserAuthForm } from './components/user-auth-form'

export default function SignIn() {
  return (
    <AuthLayout>
      <Card className='p-6'>
        <div className='flex flex-col space-y-2 text-left'>
          <h1 className='text-2xl font-semibold tracking-tight'>Giriş Yap</h1>
          <p className='text-sm text-muted-foreground'>
            Zaten hesabınız var mı?{' '}
            <Link
              to='/sign-up'
              className='underline underline-offset-4 hover:text-primary'
            >
              Hesap Oluştur
            </Link>
          </p>
        </div>
        <UserAuthForm />
        <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
          Giriş yaparak{' '}
          <a
            href='/terms'
            className='underline underline-offset-4 hover:text-primary'
          >
            Hizmet Şartları
          </a>{' '}
          ve{' '}
          <a
            href='/privacy'
            className='underline underline-offset-4 hover:text-primary'
          >
            Gizlilik Politikası
          </a>
          'nı kabul etmiş olursunuz.
        </p>
      </Card>
    </AuthLayout>
  )
}
