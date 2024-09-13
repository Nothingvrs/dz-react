import Headling from './components/Headling/Headling';
import './App.css';
// import Paragraph from './components/Paragraph/Paragraph';
import Header from './layouts/Header/Header';
import Container from './layouts/Container/Container';
import Logo from './components/Logo/Logo';
import Menu from './components/Menu/Menu';
import Form from './components/Form/Form';
// import FilmDesc from './layouts/FilmDesc/FilmDesc';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { useContext } from 'react';
import { UserContext } from './context/user.context';


function App() {

	const [data, setData] = useLocalStorage(['data']);
	const { setUser } = useContext(UserContext);
	
	function checkData(profName) {
		let flag = true;
		if (data.length === 0) {
			flag = true;
		} else {
			data.map((item) => {
				if (item.name === profName) {
					flag = false;
					setUser({...item, isLogined: true});
				} 
			});
		}
		return flag;
	}

	function addProfile(name) {
		console.log(setUser);
		if (checkData(name)) {
			setData([...data, {
				name: name,
				isLogined: false
			}]);
			setUser({
				name: name,
				isLogined: true
			});
		} 
	}
	
	return (
		<>
			<Header>
				<Logo img={'/logo.svg'}/>
				<Menu />	
			</Header>
			<Container>
				<Headling>Вход</Headling>
				<Form onSubmit={addProfile} placehldr={'Ваше имя'} title={'Вход'} buttonText={'Войти в профиль'} />
			</Container>
			{/* <Container>
				<Headling>Поиск</Headling>
				<Paragraph/>
			  <Form placehldr={'Введите название'} title={'Поиск'} buttonText={'Найти'} />
				<FilmDesc cards={CARDS}/>
			</Container> */}
		</>
	);
}


export default App;
