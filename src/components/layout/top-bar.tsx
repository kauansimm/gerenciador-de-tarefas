import { PartyPopper, Search } from 'lucide-react'
import logoGeneric from '../../assets/generic-logo.png'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Profile } from './profile'

export function Topbar() {
    return (
        <div className="flex items-center justify-between w-full rounded-2xl">
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
            <Profile />
        </div>
    )
}