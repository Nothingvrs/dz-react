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

function App() {
	const data =[
		{
			button: 'Искать',
			paragraph: 'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное',
			headling: 'Поиск',
			placeholder: 'Введите название'
		}
	];
	return (
		<>
			<Header>
				<Logo/>
				<Menu/>	
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
			</Body>
		</>
	);
}

export default App;
