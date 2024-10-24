import MenuLink from '../MenuLink/MenuLink';
import styles from './Menu.module.css';
import { BTNDATA } from '../../constants/constants';
import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { userActions, UserState } from '../../store/user.slice';

function Menu() {
	let UserIsLoginned = true;
	const [btndata, setBtnData] = useState(BTNDATA);
	const dispatch = useDispatch<AppDispatch>();
	const user = useSelector((s: RootState) => s.user);

	useEffect(() => {
		if (user.isLogined && UserIsLoginned) {
			setBtnData(oldBtnData  =>
				[...oldBtnData.toSpliced(-1,1, {
					id: 3,
					text: user.name,
					btnimg: '/profile.svg',
					link: '/favourite'
				},
				{
					id: 4,
					text: 'Выйти',
					link: '/#'
				})]);
				UserIsLoginned = false
		}	
	}, [user.name]);

	
	function clearUser() {
		dispatch(userActions.logout());
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
					count={(btn.id === 2) ? user.favourites.length : null}
					link={btn.link}
					onClick = {(btn.id === 4) ? isLogginOut : null}
				/>
			)
			)
			}
		</div>
	);
}

export default Menu;
