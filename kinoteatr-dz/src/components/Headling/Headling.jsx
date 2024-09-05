import styles from './Headling.module.css';

function Headling({ children }) {

	return (
		<h1 className={styles['headling']}>{children}</h1>
	);
}

export default Headling;
