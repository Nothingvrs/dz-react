import Button from './components/Button/Button';
import Headling from './components/Headling/Headling';
import './App.css';
import Paragraph from './components/Paragraph/Paragraph';
import Header from './layouts/Header/Header';
import Body from './layouts/Body/Body';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Form from './components/Form/Form';
import Input from './components/Input/Input';
import FilmDesc from './layouts/FilmDesc/FilmDesc';

const CARDS = 
[
	{
		id: 1,
		image: '/Card1.jpg',
		titlecard: 'Black Widow',
		isFavourite: false,
		favouriteCount: 324
	},
	{
		id: 2,
		image: '/Card2.jpg',
		titlecard: 'Shang Chi',
		isFavourite: false,
		favouriteCount: 124
	},
	{
		id: 3,
		image: '/Card3.jpg',
		titlecard: 'Loki',
		isFavourite: false,
		favouriteCount: 235
	},
	{
		id: 4,
		image: '/Card4.jpg',
		titlecard: 'How I Met Your Mother',
		isFavourite: false,
		favouriteCount: 123
	},
	{
		id: 5,
		image: '/Card5.jpg',
		titlecard: 'Money Heist',
		isFavourite: true,
		favouriteCount: 8125
	},
	{
		id: 6,
		image: '/Card6.jpg',
		titlecard: 'Friends',
		isFavourite: false,
		favouriteCount: 123
	},
	{
		id: 7,
		image: '/Card7.jpg',
		titlecard: 'The Big Bang Theory',
		isFavourite: false,
		favouriteCount: 12
	},
	{
		id: 8,
		image: '/Card8.jpg',
		titlecard: 'Two And a Half Men',
		isFavourite: false,
		favouriteCount: 456
	}
];

function App() {
	const data =[
		{
			button: 'Искать',
			paragraph: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное',
			headling: 'Поиск',
			placeholder: 'Введите название'
		}
	];

	const buttonData = [
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

	return (
		<>
			<Header>
				<Logo/>
				<Menu btndata={buttonData}/>	
			</Header>
			<Body>
				<Headling
					headling={data[0].headling}
				/>
				<Paragraph
					paragraph={data[0].paragraph}
				/>
			  <Form>
					<Input placehldr={data[0].placeholder}/>
					<Button
						button={data[0].button}
					/>
				</Form>	
				<FilmDesc cards={CARDS}/>
			</Body>
		</>
	);
}

export default App;
