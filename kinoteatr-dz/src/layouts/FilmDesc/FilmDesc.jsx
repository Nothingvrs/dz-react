import styles from './FilmDesc.module.css';
import FilmCard from '../../components/FilmCard/FilmCard';

function FilmDesc({ cards }) {

	return (
		<div className={styles['film-desc']}>
			{cards.map(card => (
				<FilmCard 
					key={card.id} 
					image={card.image} 
					titlecard={card.titlecard} 
					isFavourite={card.isFavourite}
					favouriteCount={card.favouriteCount}
				/>
			)
			)}
		</div>
	);
}

export default FilmDesc;
