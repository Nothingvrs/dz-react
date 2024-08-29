import './Input.css';

function Input({ cls, placehldr }) {
	const cl = 'image' + (cls ? ' '+ cls : '');

	return (
		<div className='wrapper'>
			<img className={cl} src="/search.svg" alt="" />
			<input className='input' type='text' placeholder={placehldr}></input>
		</div>
	);
}

export default Input;
