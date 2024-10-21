import styles from './Button.module.css';
import { forwardRef, ReactNode } from 'react';
import { ButtonProps } from './Button.props';

const Button = forwardRef<HTMLButtonElement, {children: ReactNode}>(function Button({children}:ButtonProps, ref) {
	

	return (
		<button ref={ref} className={styles['button']}>{children}</button>
	);
});

export default Button;
