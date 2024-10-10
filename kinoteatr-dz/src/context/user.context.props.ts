import { ReactNode } from 'react'

export interface UserContextProviderProps {
	children: ReactNode
}

export interface User {
	name: string,
	isLogined: boolean
}

export interface UserContextProps {
	user: User,
	setUser?: (user: User) => void
}



