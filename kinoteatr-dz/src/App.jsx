import Button from './components/Button/Button';
import Headling from './components/Headling/Headling';
import './App.css';
import Paragraph from './components/Paragraph/Paragraph';

function App() {
	const data =[
		{
			button: 'Сохранить',
			paragraph: 'Введите название фильма или сериала',
			headling: 'Поиск'
		}
	];
	return (
		<>
			<Headling
				headling={data[0].headling}
			/>
			<Paragraph
				paragraph={data[0].paragraph}
			/>
			<Button
				button={data[0].button}
			/>
		</>
	);
}

export default App;
