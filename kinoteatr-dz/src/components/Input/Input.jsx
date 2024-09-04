import './Input.css';
import classNames from 'classnames';

function Input({ img }) {
	const placehldr = 'Введите название';
	
	const inptClass = classNames({
		'image': img,
		'undisplay': !img
	});

	return (
		<div className='wrapper'>
			<img className={inptClass} src={img} alt="Поиск" />
			<input className='input' type='text' placeholder={placehldr}></input>
		</div>
	);
}

export default Input;
