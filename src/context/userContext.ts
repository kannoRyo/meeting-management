import React, {createContext} from 'react'
import { User } from '../types/user'

const user:User = {
    name: '',
    uid: ''
}

type UserContextValue = {
    user: User | undefined,
    setUser: (user: User) => void
}

const initialUser = {
    user: user,
    setUser: () => {}
}

export const UserContext = createContext<UserContextValue>({
    user: {
        name: '',
        uid: ''
    },
    setUser: () => {}
})

