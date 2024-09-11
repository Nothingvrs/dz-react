import styles from './Button.module.css';
import { forwardRef } from 'react';

const Button = forwardRef(function Button({children}, ref) {
	
	return (
		<button ref={ref} className={styles['button']}>{children}</button>
	);
});

export default Button;
