import styles from'./Header.module.css';

function Header({ children }) {

	return (
		<div className={styles['menu-wrapper']}>
			{children}
		</div>
	);
}

export default Header;
