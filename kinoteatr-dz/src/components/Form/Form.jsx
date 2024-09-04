import './Form.css';

function Form({ children }) {
	const sbmt = (e) => {
		e.preventDefault();
		console.log('Нажалась');
	};

	return (
		<form className='search' onSubmit={sbmt} action="">
			{children}
		</form>
	);
}

export default Form;
