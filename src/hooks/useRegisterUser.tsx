import type User from '@/classes/user'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserState {
    user: User
    registerUser: (user: User) => void
    loginUser: (user: Partial<Omit<User, 'name'>>) => void
    isAuthenticated: boolean
}

export const useRegisterUser = create<UserState>()(
    persist(
        (set) => ({
            user: {
                name: '',
                email: '',
                password: ''
            },
            isAuthenticated: false,
            
            registerUser: (user) =>
                set(_ => ({
                    user: user,
                })),

            loginUser: (userLogin) =>
                set(state => ({
                    isAuthenticated: (userLogin.email === state.user.email) && (userLogin.password === state.user.password),
                })),
        }),
        {
            name: 'user-storage'
        }
    )
)