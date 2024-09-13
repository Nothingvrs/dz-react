import { createContext } from 'react';
import { useState } from 'react';

export const UserContext = createContext({
	name: null,
	isLogined: false	
});

export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(UserContext);

	return 	<UserContext.Provider value={{ user, setUser }}>
		{children}
	</UserContext.Provider>;
};