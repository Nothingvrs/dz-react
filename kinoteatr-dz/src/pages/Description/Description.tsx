import styles from './Description.module.css';
import cl from 'classnames';
import { Await, useLoaderData } from 'react-router';
import { MouseEvent, Suspense, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { userActions } from '../../store/user.slice';

function Description() {
	const data = useLoaderData() as  { [x: string]: any };
	const user = useSelector((s: RootState) => s.user);
	const dispatch = useDispatch<AppDispatch>();
	
	const durationData = moment.duration(data.data.data.short.duration);
	const duration = `${durationData.hours()} hours`+` `+`${durationData.minutes()} minutes`;
	
	data.data.data.short['type'] = data.data.data.short['@type'];
	console.log(data.data.data.short)
	type initialCardType = {
		IMDB_ID: string,
		title: string,
		img: string,
		description: string,
		rate: number | undefined,
		isFavourite: boolean
		type: string,
		date: string,
		duration: string,
		genre: string,
		reviewName: string,
		reviewDate: string,
		reviewText: string
	}
	
	const initialCard: initialCardType = { 
		IMDB_ID: data.data.data.imdbId,
		title: data.data.data.short.name,
		img: data.data.data.short.image,
		description: data.data.data.short.description,
		rate: data.data.data.short.aggregateRating.ratingValue,
		isFavourite: user.favourites.some(item => 
			item.IMDB_ID === data.data.data.imdbId
		),
		type: data.data.data.short.type,
		date: data.data.data.short.datePublished,
		duration: duration,
		genre: data.data.data.short.genre.join(', '),
		reviewName: data.data.data.short.review.name,
		reviewDate: data.data.data.short.review.dateCreated,
		reviewText: data.data.data.short.review.reviewBody
	}

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

	const [card, setCard] = useState(initialCard);
	
	return (
		<Suspense fallback={'Загружаю...'}>
		<Await resolve={data.data}>
			<div className={styles['wrapper']}>
				<div className={styles['title']}>
					<p>Поиск фильмов</p>
					<h1>{card.title}</h1>
				</div>
				<div className={styles['film-body']}>
					<img className={styles['film-image']} src={card.img} alt="" />
					<div className={styles['description']}>
							<p className={styles['description-text']}>{card.description}</p>
							<div className={styles['description-rate']}>
								<div className={styles['description-rate-details']}>
									<img src="/star.svg" alt="Количество добавивших в избранное" />
									{card.rate}
								</div>
								<div className={styles['card-wrapper-favourite']}>
									<img src={card.isFavourite ? '/favorite.svg' : '/like.svg'} alt="" />
									<button onClick={toggleFavourite} className={cl(styles['favourite-button'], {
										[styles['favourite']]: card.isFavourite
									})}>
										{card.isFavourite ? 'В избранном' : 'В избранное'}
									</button>
								</div>
							</div>
							<div className={styles['description-wrapper']}>
								<p className={styles['description-title']}>Тип</p>
								<p className={styles['description-text']}>{card.type}</p>
							</div>
							<div className={styles['description-wrapper']}>
								<p className={styles['description-title']}>Дата выхода</p>
								<p className={styles['description-text']}>{card.date}</p>
							</div>
							{card.type === 'Movie' && <div className={styles['description-wrapper']}>
								<p className={styles['description-title']}>Длительность</p>
								<p className={styles['description-text']}>{card.duration}</p>
							</div>}
							<div className={styles['description-wrapper']}>
								<p className={styles['description-title']}>Жанр</p>
								<p className={styles['description-text']}>{card.genre}</p>
							</div>
					</div>
				</div>
				<div className={styles['reviews']}>
					<p className={styles['description-title']}>Отзывы</p>
					<div className={styles['wrapper-reviews']}>
						<div className={styles['header-reviews']}>
							<h3 className={styles['title-reviews']}>{card.reviewName}</h3>
							<p className={styles['description-title']}>{card.reviewDate
							}</p>
						</div>
						<div className={styles['description-text']}>{card.reviewText}</div>
					</div>
				</div>
			</div>
		</Await>
		</Suspense>
	);
}

export default Description;
