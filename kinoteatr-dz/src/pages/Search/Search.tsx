import Headling from '../../components/Headling/Headling';
import FilmDesc from '../../components/FilmDesc/FilmDesc';
import Paragraph from '../../components/Paragraph/Paragraph';
import Form from '../../components/Form/Form';
import { CARDS } from '../../constants/constants';

function Search() {

	return <>
		<Headling>Поиск</Headling>
		<Paragraph text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное'}/>
		<Form onSubmit={()=>{}} placehldr={'Введите название'} buttonText={'Найти'} />
		<FilmDesc cards={CARDS}/>
	</>
	;
}

export default Search;
