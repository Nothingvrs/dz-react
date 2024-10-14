import styles from './FilmCard.module.css';
import cl from 'classnames';
import { FilmCardProps } from './FilmCard.props'
import { NavLink } from 'react-router-dom'

function FilmCard({ imdb_id, image, titlecard, isFavourite, favouriteCount}: FilmCardProps) {
	
	return (
		<NavLink to={`/card/${imdb_id}`}>
			<div className={styles['film-card']}>
				<div className={styles['card-image-wrapper']} style={{backgroundImage: `url('${image}')`}}>
					<div className={styles['card-favourite-count']}>
						<img src="/star.svg" alt="Количество добавивших в избранное" />
						{favouriteCount}
					</div>
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
		</NavLink>
	);
}

export default FilmCard;
