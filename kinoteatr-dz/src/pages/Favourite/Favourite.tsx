import Headling from '../../components/Headling/Headling';
import FilmDesc from '../../components/FilmDesc/FilmDesc';
import { CARDS } from '../../constants/constants';

function Favourite() {

	return <>
		<Headling>Избранное</Headling>
		<FilmDesc cards={CARDS}/>
	</>
	;
}

export default Favourite;
