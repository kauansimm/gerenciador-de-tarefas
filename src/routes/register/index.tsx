import { createFileRoute, Link } from '@tanstack/react-router'
import banner from '../../assets/banner.jpg'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/register/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex-container flex-row-reverse min-h-dvh'>
      <img
        src={banner}
        alt="Banner lateral"
        className='object-cover w-7/12'
      />
      <div
        className='flex-container flex-col justify-center items-center gap-6 flex-1 px-8 py-6 lg:px-16'
      >
        <h1 className='text-foreground text-center'>
          Crie sua conta gratuita agora!
        </h1>

        <form className='flex-container flex-col max-w-7/12 gap-2'>
          <Label htmlFor='name'>
            Nome
          </Label>
          <Input
            id='name'
            type='text'
            placeholder='Insira seu nome ou apelido'
          />

          <Label
            htmlFor='email'
            className='mt-2'
          >
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

          <Label
            htmlFor='confirm-password'
            className='mt-2'
          >
            Confirmar senha
          </Label>
          <Input
            id='confirm-password'
            type='confirm-password'
            placeholder='Insira sua senha novamente'
            endIcon={() => <EyeOff size={16} />}
          />

          <span className='text-center my-1'>
            Já tem uma conta? { }
            <Link
              to='/login'
              className='font-bold hover:underline cursor-pointer'
            >
              Entrar
            </Link>
          </span>

          <Button
            type='submit'
          >
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  )
}
