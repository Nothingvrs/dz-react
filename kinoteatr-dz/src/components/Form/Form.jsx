import styles from './Form.module.css';

function Form({ children }) {
	
	return (
		<form className={styles['search']} action="">
			{children}
		</form>
	);
}

export default Form;
