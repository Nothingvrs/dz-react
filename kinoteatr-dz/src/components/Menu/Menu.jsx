import MenuLink from '../MenuLink/MenuLink';
import './Menu.css';

function Menu({ btndata }) {

	return (
		<div className='menu'>
			{btndata.map(btn => (
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

