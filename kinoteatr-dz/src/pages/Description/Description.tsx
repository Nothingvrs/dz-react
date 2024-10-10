import styles from './Description.module.css';
import cl from 'classnames';
import { Await, useLoaderData } from 'react-router';
import { Suspense } from 'react';
import moment from 'moment';

function Description() {
	const isFavourite = false;
	const data = useLoaderData() as  { [x: string]: any };
	
	const durationData = moment.duration(data.data.data.short.duration);
	const duration = `${durationData.hours()} hours`+` `+`${durationData.minutes()} minutes`;
	console.log(data.data.data.short)

	data.data.data.short['type'] = data.data.data.short['@type'];
		
	return (
		<Suspense fallback={'Загружаю...'}>
		<Await resolve={data.data}>
			<div className={styles['wrapper']}>
				<div className={styles['title']}>
					<p>Поиск фильмов</p>
					<h1>{data.data.data.short.name}</h1>
				</div>
				<div className={styles['film-body']}>
					<img className={styles['film-image']} src={data.data.data.short.image} alt="" />
					<div className={styles['description']}>
							<p className={styles['description-text']}>{data.data.data.short.description}</p>
							<div className={styles['description-rate']}>
								<div className={styles['description-rate-details']}>
									<img src="/star.svg" alt="Количество добавивших в избранное" />
									{data.data.data.short.aggregateRating.ratingValue}
								</div>
								<div className={styles['card-wrapper-favourite']}>
									<img src={isFavourite ? '/favorite.svg' : '/like.svg'} alt="" />
									<button className={cl(styles['favourite-button'], {
										[styles['favourite']]: isFavourite
									})}>
										{isFavourite ? 'В избранном' : 'В избранное'}
									</button>
								</div>
							</div>
							<div className={styles['description-wrapper']}>
								<p className={styles['description-title']}>Тип</p>
								<p className={styles['description-text']}>{data.data.data.short.type}</p>
							</div>
							<div className={styles['description-wrapper']}>
								<p className={styles['description-title']}>Дата выхода</p>
								<p className={styles['description-text']}>{data.data.data.short.datePublished}</p>
							</div>
							<div className={styles['description-wrapper']}>
								<p className={styles['description-title']}>Длительность</p>
								<p className={styles['description-text']}>{duration}</p>
							</div>
							<div className={styles['description-wrapper']}>
								<p className={styles['description-title']}>Жанр</p>
								<p className={styles['description-text']}>{data.data.data.short.genre.join(', ')}</p>
							</div>
					</div>
				</div>
				<div className={styles['reviews']}>
					<p className={styles['description-title']}>Отзывы</p>
					<div className={styles['wrapper-reviews']}>
						<div className={styles['header-reviews']}>
							<h3 className={styles['title-reviews']}>{data.data.data.short.review.name}</h3>
							<p className={styles['description-title']}>{data.data.data.short.review.dateCreated
							}</p>
						</div>
						<div className={styles['description-text']}>{data.data.data.short.review.reviewBody}</div>
					</div>
				</div>
			</div>
		</Await>
		</Suspense>
	);
}

export default Description;
