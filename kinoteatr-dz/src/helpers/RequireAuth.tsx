import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../context/user.context'

export const RequireAuth = ({ children }: { children: ReactNode}) => {
	const { user } = useContext(UserContext);
	console.log(user)
	if (user.isLogined == false) {
		return <Navigate to="/auth" replace />;
	}
	return children;
};