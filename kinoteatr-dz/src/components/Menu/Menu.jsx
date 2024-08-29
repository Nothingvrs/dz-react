import './Menu.css';

function Menu() {

	return (
		<ul className='menu'>
			<a className='menu-search' href="#">Поиск фильмов</a>
			<div className='menu-films'>
				<a href="#">Мои фильмы</a>
				<img src="/countFilms.svg" alt="Количество фильмов" />
			</div>
			<div className='menu-enter'>
				<a href="#">Войти</a>
				<img src="/enter.svg" alt="Количество фильмов" />
			</div>
		</ul>
	);
}

export default Menu;

