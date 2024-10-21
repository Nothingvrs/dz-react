import styles from'./Header.module.css';
import { headerProps } from './header.props';

function Header({ children }: headerProps) {

	return (
		<div className={styles['menu-wrapper']}>
			{children}
		</div>
	);
}

export default Header;
