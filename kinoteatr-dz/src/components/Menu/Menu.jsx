import MenuLink from '../MenuLink/MenuLink';
import styles from './Menu.module.css';
import { BTNDATA } from '../../constants/constants';
import { useEffect, useState } from 'react';

function Menu({ isLogined, name, clearUser }) {
	const [btndata, setBtnData] = useState(BTNDATA);

	useEffect(() => {
		if (isLogined) {
			setBtnData(oldBtnData =>
				[...oldBtnData.toSpliced(-1,1, {
					id: 3,
					text: name,
					btnimg: '/profile.svg'
				},
				{
					id: 4,
					text: 'Выйти'
				})]);
		}	
		isLogined = false;	
	}, [name]);

	const isLogginOut = () => {
		setBtnData(BTNDATA);
		clearUser();
	};

	return (
		<div className={styles['menu']}>
			{btndata.map(btn => (
				<MenuLink key={btn.id}
					text={btn.text}
					img={btn.btnimg}
					onClick = {(btn.id === 4) ? isLogginOut : null}
				/>
			)
			)
			}
		</div>
	);
}

export default Menu;

