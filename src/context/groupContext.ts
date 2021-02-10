import React, {createContext} from 'react'
import { Group } from '../types/group'

type GroupContextValue = {
    group: Group | undefined,
    setGroup: (group: Group) => void
}

export const GroupContext = createContext<GroupContextValue>({
    group: {
        name: '',
        uid: ''
    },
    setGroup: () => {}
})

