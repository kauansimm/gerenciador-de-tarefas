import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import banner from '../../assets/banner.jpg'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm, type Resolver } from 'react-hook-form';
import type User from '@/classes/user';
import { useRegisterUser } from '@/hooks/useRegisterUser';

export const Route = createFileRoute('/login/')({
  component: RouteComponent,
})

const resolver: Resolver<User> = async (values) => {
  return {
    values:
      values.email && values.password ? values : {},
    errors: {
      ...(!values.email && {
        email: {
          type: "required",
          message: "O campo e-mail é obrigatório",
        },
      }),
      ...(!values.password && {
        password: {
          type: "required",
          message: "O campo senha é obrigatório",
        },
      }),

    },
  }
}

function RouteComponent() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver
  })

  const { user } = useRegisterUser()
  const navigate = useNavigate()

  const onSubmit = handleSubmit((userLogin: Partial<Omit<User, 'name'>>) => {

    const sameEmail = user.email === userLogin.email
    const samePassword = user.password === userLogin.password

    if (sameEmail && samePassword) {
      navigate({
        to: '/'
      })
    }

  })

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

        <form
          onSubmit={onSubmit}
          className='flex-container flex-col max-w-7/12 gap-2'
        >
          <Label htmlFor='email'>
            E-mail
          </Label>
          <Input
            id='email'
            type='email'
            placeholder='SeuNome@example.com'
            {...register('email')}
          />
          {errors.email &&
            <span className='text-destructive'>
              {errors.email.message}
            </span>
          }

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
            {...register('password')}
          />
          {errors.password &&
            <span className='text-destructive'>
              {errors.password.message}
            </span>
          }

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
