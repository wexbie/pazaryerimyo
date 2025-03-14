import { Link } from '@tanstack/react-router'
import { Card } from '@/components/ui/card'
import AuthLayout from '../auth-layout'
import { SignUpForm } from './components/sign-up-form'

export default function SignUp() {
  return (
    <AuthLayout>
      <Card className='p-6'>
        <div className='mb-2 flex flex-col space-y-2 text-left'>
          <h1 className='text-lg font-semibold tracking-tight'>
            Hesap Oluştur
          </h1>
          <p className='text-sm text-muted-foreground'>
            Zaten hesabınız var mı?{' '}
            <Link
              to='/sign-in'
              className='underline underline-offset-4 hover:text-primary'
            >
              Giriş Yap
            </Link>
          </p>
        </div>
        <SignUpForm />
        <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
          Hesap oluşturarak{' '}
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
