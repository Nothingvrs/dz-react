import Headling from '../../components/Headling/Headling';
import Paragraph from '../../components/Paragraph/Paragraph';
import styles from '../SearchError/SearchError.module.css';

function SearchError() {
	return (
		<>
			<div className={styles['wrapper']}>
				<Headling>Упс... Ничего не найдено</Headling>
				<Paragraph
					text={
						'Попробуйте изменить запрос или ввести более точное название фильма'
					}
				/>
			</div>
		</>
	);
}

export default SearchError;
