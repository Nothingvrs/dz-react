import './FilmCard.css';

function FilmCard({ image, titlecard, isFavourite, favouriteCount}) {
	
	const cl = isFavourite ? 'favourite-button favourite' : 'favourite-button';
	const buttonText = isFavourite ? 'В избранном' : 'В избранное';
	const imgfvr = isFavourite ? '/favorite.svg' : '/like.svg';

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
				<img src={imgfvr} alt="" />
				<button className={cl}>{buttonText}</button>
			</div>
		</div>
	);
}

export default FilmCard;
