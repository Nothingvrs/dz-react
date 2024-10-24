import styles from './MenuLink.module.css';
import { NavLink } from 'react-router-dom';
import cl from 'classnames';
import { MenuLinkProps } from './MenuLink.props';

function MenuLink({ link, text, count, onClick }:MenuLinkProps) {

	return (
		<div className={styles['menu-link']}>
			<NavLink onClick={onClick!} to={link} className={({ isActive }) => cl(styles['link-item'], {
				[styles.active]: isActive
			})}>{text}</NavLink>
			{count !== null && <div className={styles['count']}>{count}</div>}
		</div>
	);
}

export default MenuLink;

