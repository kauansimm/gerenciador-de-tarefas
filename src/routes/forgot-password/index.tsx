import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import banner from '../../assets/banner.jpg'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { ChevronLeft, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/forgot-password/')({
    component: RouteComponent,
})

function RouteComponent() {

    const navigate = useNavigate()

    const handleBackToLoginPage = () => {
        navigate({
            to: '/login'
        })
    }
    
    return (
        <div className='flex-container min-h-dvh'>
            <img
                src={banner}
                alt="Banner lateral"
                className='object-cover w-7/12'
            />
            <div
                className='flex-container relative flex-col justify-center items-center gap-6 flex-1 px-8 py-6 lg:px-16'
            >

                <Button
                    variant={'ghost'}
                    onClick={handleBackToLoginPage}
                    className='text-primary text-xl absolute start-5 top-5'
                >
                    <ChevronLeft
                        size={24}
                    />
                    Voltar
                </Button>

                <h1 className='text-foreground text-center'>
                    Recuperar senha
                </h1>
                <h3 className='text-foreground font-normal text-center'>
                    Para recuperar sua senha, { }
                    <strong>
                        insira o endereço de e-mail usado ao registrar a conta
                    </strong>
                    . Você receberá um link para redefinir sua senha.
                </h3>

                <form className='flex-container flex-col max-w-7/12 gap-2'>
                    <Label htmlFor='email'>
                        E-mail
                    </Label>
                    <Input
                        id='email'
                        type='email'
                        placeholder='SeuNome@example.com'
                    />

                    <Button
                        type='submit'
                    >
                        Enviar link
                    </Button>
                </form>
            </div>
        </div>
    )
}
