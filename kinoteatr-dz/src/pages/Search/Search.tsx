import Headling from '../../components/Headling/Headling';
import FilmDesc from '../../components/FilmDesc/FilmDesc';
import Paragraph from '../../components/Paragraph/Paragraph';
import Form from '../../components/Form/Form';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';
import SearchError from '../SearchError/SearchError';

function Search() {

	const [cards, setCards] = useState([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();
	const [isEmptySearch, setIsEmptySearch] = useState<boolean>(false);

	

	const getSearch = async (q: string) => {
		try {
			setIsLoading(true);
			const { data } = await axios.get(`https://search.imdbot.workers.dev/?q=${q}`);
			data.description.length === 0 ? 
			setIsEmptySearch(true) : 
			setIsEmptySearch(false);
			data.description.map((card: { [x: string]: any }) => {
				card['TITLE'] = card['#TITLE'];
  			delete card['#TITLE'];
				card['IMG_POSTER'] = card['#IMG_POSTER'];
  			delete card['#IMG_POSTER'];
				card['RANK'] = card['#RANK'];
  			delete card['#RANK'];
				card['IMDB_ID'] = card['#IMDB_ID'];
  			delete card['#IMDB_ID'];
			});
			setCards(data.description);
			setIsLoading(false);
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};
		
	return <>
		<Headling>Поиск</Headling>
		<Paragraph text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное'}/>
		<Form onSubmit={getSearch} placehldr={'Введите название'} buttonText={'Найти'} />
		{isEmptySearch && <SearchError />}
		{!isLoading && <FilmDesc cards={cards} />}
		{isLoading && <>Загружаем фильмы...</> }
		{error && <>{error}</>}
	</>
	;
}

export default Search;

