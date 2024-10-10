import { createContext } from 'react';
import { useState } from 'react';
import { User, UserContextProps, UserContextProviderProps } from './user.context.props'

const DefaultValue = {
	user: {
		name: '',
		isLogined: false
	}
}

const DefaultState = {
	name: '',
	isLogined: false	
}

export const UserContext = createContext<UserContextProps>(DefaultValue);

export  const UserContextProvider = ({ children }: UserContextProviderProps) => {
	const [user, setUser] = useState<User>(DefaultState);

	return 	<UserContext.Provider value={{ user, setUser }}>
		{children}
	</UserContext.Provider>;
};
