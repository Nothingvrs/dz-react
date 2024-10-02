import styles from './FilmCard.module.css';
import cl from 'classnames';
import { FilmCardProps } from './FilmCard.props'

function FilmCard({ image, titlecard, isFavourite, favouriteCount}: FilmCardProps) {
	
	return (
		<div className={styles['film-card']}>
			<div className={styles['card-image-wrapper']}>
				<div className={styles['card-favourite-count']}>
					<img src="/star.svg" alt="Количество добавивших в избранное" />
					{favouriteCount}
				</div>
				<img src={image} alt="Обложка фильма" />
			</div>
			<p className={styles['card-title']}>{titlecard}</p>
			<div className={styles['card-wrapper-favourite']}>
				<img src={isFavourite ? '/favorite.svg' : '/like.svg'} alt="" />
				<button className={cl(styles['favourite-button'], {
					[styles['favourite']]: isFavourite
				})}>
					{isFavourite ? 'В избранном' : 'В избранное'}
				</button>
			</div>
		</div>
	);
}

export default FilmCard;
