import { Outlet } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import Menu from '../../components/Menu/Menu';
import Header from '../header/header';
import styles from './Layout.module.css';

function Layout() {
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

export default Layout
