import { createFileRoute, Link } from '@tanstack/react-router'
import banner from '../../assets/banner.jpg'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useForm, type Resolver } from 'react-hook-form'
import { useRegisterUser } from '@/hooks/useRegisterUser';
import type User from '@/classes/user';

export const Route = createFileRoute('/register/')({
  component: RouteComponent,
})

const resolver: Resolver<User> = async (values) => {
  return {
    values:
      values.name && values.email && values.password ? values : {},
    errors: {
      ...(!values.name && {
        name: {
          type: "required",
          message: "O campo nome é obrigatório",
        },
      }),
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

  const { registerUser } = useRegisterUser()

  const onSubmit = handleSubmit((user: User) => {
    registerUser(user)
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
        <h1 className='text-foreground text-center'>
          Crie sua conta gratuita agora!
        </h1>

        <form
          onSubmit={onSubmit}
          className='flex-container flex-col max-w-7/12 gap-2'
        >
          <Label htmlFor='name'>
            Nome
          </Label>
          <Input
            id='name'
            type='text'
            placeholder='Insira seu nome ou apelido'
            {...register('name')}
          />
          {errors.name &&
            <span className='text-destructive'>
              {errors.name.message}
            </span>
          }

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
