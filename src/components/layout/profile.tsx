import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar } from "../ui/avatar"
import { useRegisterUser } from "@/hooks/useRegisterUser"
import { LogOut, SquareActivity, UserRoundPen } from "lucide-react"
import { useNavigate } from "@tanstack/react-router"

export function Profile() {

    const { user, logout } = useRegisterUser()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate({
            to: '/login'
        })
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className='rounded-lg h-10 w-10 items-center justify-center bg-primary hover:bg-primary/90 duration-75 cursor-pointer'>
                    <span className="text-white font-bold text-lg">
                        {user.name.charAt(0).toUpperCase()}
                    </span>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60 mr-5" align="start">
                <DropdownMenuGroup>
                    <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
                    <DropdownMenuItem className="flex items-center focus:bg-transparent">
                        <Avatar className='rounded-lg h-10 w-10 items-center justify-center bg-primary'>
                            <span className="text-white font-bold text-lg">
                                {user.name.charAt(0).toUpperCase()}
                            </span>
                        </Avatar>
                        <div className="">
                            <p className="text-xs font-bold">{user.name}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        <UserRoundPen />
                        Editar perfil
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                        <SquareActivity />
                        Minhas atividades
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem
                        variant="destructive"
                        className="cursor-pointer"
                        onClick={handleLogout}
                    >
                        <LogOut />
                        Sair
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}