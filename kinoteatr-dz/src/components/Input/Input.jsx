import styles from './Input.module.css';
import cl from 'classnames';
import { forwardRef } from 'react';

const Input = forwardRef(function Input({ onChange, img, placehldr, isValid, value }, ref) {
		
	return (
		<span className={styles['wrapper']}>
			<img className={cl({[styles['undisplay']]:!img})} src={img} alt="Поиск" />
			<input ref={ref} value={value} onChange={onChange} className={cl(styles['input'], {
				[styles['invalid']]: !isValid
			})} type='text' placeholder={placehldr}></input>
		</span>
	);
});

export default Input;
