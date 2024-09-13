import MenuLink from '../MenuLink/MenuLink';
import styles from './Menu.module.css';
import { BTNDATA } from '../../constants/constants';
import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../context/user.context';

function Menu() {
	const [btndata, setBtnData] = useState(BTNDATA);
	const { user, setUser } = useContext(UserContext);

	useEffect(() => {
		if (user.isLogined) {
			setBtnData(oldBtnData =>
				[...oldBtnData.toSpliced(-1,1, {
					id: 3,
					text: user.name,
					btnimg: '/profile.svg'
				},
				{
					id: 4,
					text: 'Выйти'
				})]);
		}	
		console.log(user);
		user.isLogined = false;	
	}, [user.name]);

	function clearUser() {
		setUser({
			name: null,
			isLogined: false
		});
	} 

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

