import { ReactNode, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const RequireAuth = ({ children }: { children: ReactNode}) => {
	const user = useSelector((s: RootState) => s.user);
	
	if (user.isLogined == false) {
		return <Navigate to="/auth" replace />;
	}
	return children;
};