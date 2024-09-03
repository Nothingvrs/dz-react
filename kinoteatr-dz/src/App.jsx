import Button from './components/Button/Button';
import Headling from './components/Headling/Headling';
import './App.css';
import Paragraph from './components/Paragraph/Paragraph';
import Header from './layouts/Header/Header';
import Container from './layouts/Container/Container';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Form from './components/Form/Form';
import Input from './components/Input/Input';
import FilmDesc from './layouts/FilmDesc/FilmDesc';
import { CARDS } from './constants/constants';

function App() {

	return (
		<>
			<Header>
				<Logo img={'/logo.svg'}/>
				<Menu/>	
			</Header>
			<Container>
				<Headling>Поиск</Headling>
				<Paragraph/>
			  <Form>
					<Input img={'/search.svg'}/>
					<Button>Искать</Button>	
				</Form>	
				<FilmDesc cards={CARDS}/>
			</Container>
		</>
	);
}

export default App;
