import './FilmCard.css';

function FilmCard({ image, titlecard, isFavourite, favouriteCount}) {
	
	return (
		<div className='film-card'>
			<div className='card-image-wrapper'>
				<div className='card-favourite-count'>
					<img src="/star.svg" alt="Количество добавивших в избранное" />
					{favouriteCount}
				</div>
				<img src={image} alt="Обложка фильма" />
			</div>
			<p className='card-title'>{titlecard}</p>
			<div className='card-wrapper-favourite'>
				<img src={isFavourite ? '/favorite.svg' : '/like.svg'} alt="" />
				<button className={isFavourite ? 'favourite-button favourite' : 'favourite-button'}>
					{isFavourite ? 'В избранном' : 'В избранное'}
				</button>
			</div>
		</div>
	);
}

export default FilmCard;
