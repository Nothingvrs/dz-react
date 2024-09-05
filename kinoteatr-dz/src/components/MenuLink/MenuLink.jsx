import styles from './MenuLink.module.css';

function MenuLink({ text, img }) {

	return (
		<div className={styles['menu-link']}>
			<a href="#">{text}</a>
			{img && <img src={img} alt="Количество фильмов" />}
		</div>
	);
}

export default MenuLink;

