import Headling from '../../components/Headling/Headling';
import FilmDesc from '../../components/FilmDesc/FilmDesc';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Favourite() {

	const user = useSelector((s: RootState) => s.user);

	return <>
		<Headling>Избранное</Headling>
		<FilmDesc cards={user.favourites}/> 
	</>
	;
}

export default Favourite;
