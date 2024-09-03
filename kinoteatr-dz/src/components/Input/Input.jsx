import './Input.css';

function Input({ img }) {
	const placehldr = 'Введите название';

	let inptClass = 'image';
	if (!img) inptClass =+ ' undisplay';

	return (
		<div className='wrapper'>
			<img className={inptClass} src={img} alt="Поиск" />
			<input className='input' type='text' placeholder={placehldr}></input>
		</div>
	);
}

export default Input;
