import { useContext } from 'react';
import Form from '../../components/Form/Form';
import Headling from '../../components/Headling/Headling';
import { UserContext } from '../../context/user.context';
import { useLocalStorage } from '../../hooks/use-localstorage.hook';
import { useNavigate } from 'react-router-dom';

function Enter() {
	const [data, setData] = useLocalStorage('data');
	const { setUser } = useContext(UserContext);

	const navigate = useNavigate();

	function checkData(profName: string) {
		let flag = true;
		if (data.length === 0) {
			flag = true;
		} else {
			data.map(item => {
				if (item.name === profName) {
					flag = false;
					setUser!({ ...item, isLogined: true });
				}
			});
		}
		return flag;
	}

	function addProfile(name: string) {
		if (checkData(name)) {
			setData([
				...data,
				{
					name: name,
					isLogined: false
				}
			]);
			setUser!({
				name: name,
				isLogined: true
			});
		}
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
