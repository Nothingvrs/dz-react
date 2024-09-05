import MenuLink from '../MenuLink/MenuLink';
import styles from './Menu.module.css';
import { BTNDATA } from '../../constants/constants';

function Menu() {

	return (
		<div className={styles['menu']}>
			{BTNDATA.map(btn => (
				<MenuLink key={btn.id}
					text={btn.text}
					img={btn.btnimg}
				/>
			)
			)
			}
		</div>
	);
}

export default Menu;

