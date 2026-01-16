import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import banner from '../../assets/banner.jpg'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex-container min-h-dvh'>
      <img
        src={banner}
        alt="Banner lateral"
        className='object-cover w-7/12'
      />
      <div
        className='flex-container flex-col justify-center items-center gap-6 flex-1 px-8 py-6 lg:px-16'
      >
        <h1 className='text-foreground'>
          Que bom ver você aqui!
        </h1>

        <form className='flex-container flex-col max-w-7/12 gap-2'>
          <Label htmlFor='email'>
            E-mail
          </Label>
          <Input
            id='email'
            type='email'
            placeholder='SeuNome@example.com'
          />

          <Label
            htmlFor='password'
            className='mt-2'
          >
            Senha
          </Label>
          <Input
            id='password'
            type='password'
            placeholder='Insira sua senha'
            endIcon={() => <EyeOff size={16} />}
          />

          <Link
            to='/'
            className='text-center hover:underline cursor-pointer'
          >
            Esqueci minha senha
          </Link>
          <span className='text-center mt-2'>
            Não tem uma conta? { }
            <Link
              to='/register'
              className='font-bold hover:underline cursor-pointer'
            >
              Cadastre-se
            </Link>
          </span>

          <Button
            type='submit'
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  )
}
