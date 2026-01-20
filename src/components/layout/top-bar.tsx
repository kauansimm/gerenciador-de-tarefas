import { PartyPopper, Search } from 'lucide-react'
import logoGeneric from '../../assets/generic-logo.png'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export function Topbar() {
    return (
        <div className="bg-foreground/10 flex items-center justify-between w-full rounded-2xl p-4">
            <img
                src={logoGeneric}
                className='object-contain w-1/11'
                alt="Imagem genérica de logo"
            />
            <div className='flex w-4/12 gap-2'>
                <Input
                    className='bg-white'
                    placeholder='Pesquise aqui...'
                    startIcon={() => <Search size={16} />}
                />
                <Button>
                    <PartyPopper />
                    Criar
                </Button>
            </div>
            <Avatar className='rounded-lg'>
                <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    )
}