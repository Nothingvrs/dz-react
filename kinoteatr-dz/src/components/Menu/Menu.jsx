import MenuLink from '../MenuLink/MenuLink';
import './Menu.css';

const btnData = [
	{
		id: 1,
		text: 'Поиск фильмов'
	},
	{
		id: 2,
		text: 'Мои фильмы',
		btnimg: '/countFilms.svg'
	},
	{
		id: 3,
		text: 'Войти',
		btnimg: '/enter.svg'
	}
];

function Menu() {

	return (
		<div className='menu'>
			{btnData.map(btn => (
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

