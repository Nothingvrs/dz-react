import styles from './MenuLink.module.css';

function MenuLink({ text, img, onClick }) {

	return (
		<div className={styles['menu-link']}>
			<a onClick={onClick} href="#">{text}</a>
			{img && <img src={img} alt="Количество фильмов" />}
		</div>
	);
}

export default MenuLink;

