import styles from './FilmCard.module.css';
import cl from 'classnames';
import { FilmCardProps } from './FilmCard.props';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { userActions } from '../../store/user.slice';
import { MouseEvent, useState } from 'react';

function FilmCard({ imdb_id, image, titlecard, isFavourite, favouriteCount}: FilmCardProps) {
	const dispatch = useDispatch<AppDispatch>();
	
	const initialCard = {
		IMDB_ID: imdb_id,
		IMG_POSTER: image,
		TITLE: titlecard,
		RANK: favouriteCount,
		isFavourite: isFavourite,
	}

	const [card, setCard] = useState(initialCard)
	
	const toggleFavourite = (e: MouseEvent) => {
		e.preventDefault();
		if (card.isFavourite === true) {
			card.isFavourite = false;
			console.log(card);
			setCard({...card, isFavourite: false})
			dispatch(userActions.removeFavourite(card))
		} else {
			card.isFavourite = true;
			setCard({...card, isFavourite: true})
			dispatch(userActions.addFavourite(card))
		}
	};

	return (
		<NavLink to={`/card/${card.IMDB_ID}`}>
			<div className={styles['film-card']}>
				<div className={styles['card-image-wrapper']} style={{backgroundImage: `url('${card.IMG_POSTER}')`}}>
					<div className={styles['card-favourite-count']}>
						<img src="/star.svg" alt="Количество добавивших в избранное" />
						{card.RANK}
					</div>
				</div>
				<p className={styles['card-title']}>{card.TITLE}</p>
				<div className={styles['card-wrapper-favourite']}>
					<img src={card.isFavourite ? '/favorite.svg' : '/like.svg'} alt="" />
					<button onClick={toggleFavourite} className={cl(styles['favourite-button'], {
						[styles['favourite']]: card.isFavourite
					})}>
						{card.isFavourite ? 'В избранном' : 'В избранное'}
					</button>
				</div>
			</div>
		</NavLink>
	);
}

export default FilmCard;
