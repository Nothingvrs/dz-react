import { Outlet } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import Header from '../header/header';
import styles from './LoginLayout.module.css';

function LoginLayout() {
	return (
		<>
			<Header>
				<Logo img={'/logo.svg'} />
				<Menu />
			</Header>
			<div className={styles['container']}>
				<Outlet />
			</div>
		</>
	)
}

export default LoginLayout
