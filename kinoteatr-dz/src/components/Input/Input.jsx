import styles from './Input.module.css';
import cl from 'classnames';

function Input({ img }) {
	const placehldr = 'Введите название';
	
	return (
		<span className={styles['wrapper']}>
			<img className={cl({[styles['undisplay']]:!img})} src={img} alt="Поиск" />
			<input className={styles['input']} type='text' placeholder={placehldr}></input>
		</span>
	);
}

export default Input;
