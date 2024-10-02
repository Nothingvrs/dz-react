import styles from './Headling.module.css';
import { HeadlingProps } from './Headling.props'

function Headling({ children }:HeadlingProps) {

	return (
		<h1 className={styles['headling']}>{children}</h1>
	);
}

export default Headling;
