import type User from '@/classes/user'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserState {
    user: User
    registerUser: (user: User) => void
}

export const useRegisterUser = create<UserState>()(
    persist(
        (set) => ({
            user: {
                name: '',
                email: '',
                password: ''
            },
            
            registerUser: (user) =>
                set(_ => ({
                    user: user
                })),
        }),
        {
            name: 'user-storage'
        }
    )
)