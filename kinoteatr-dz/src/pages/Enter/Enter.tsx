import Form from '../../components/Form/Form';
import Headling from '../../components/Headling/Headling';
import { useNavigate } from 'react-router-dom';
import { userActions } from '../../store/user.slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';

function Enter() {
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	function addProfile(name: string) {
			dispatch(userActions.login({
				name: name,
				isLogined: true,
				favourites: []
			}));;
			navigate('/search');
		}

	return (<>
		<Headling>Вход</Headling>
		<Form
			onSubmit={addProfile}
			placehldr={'Ваше имя'}
			buttonText={'Войти в профиль'}
		/>
	</>
	);
}

export default Enter;


