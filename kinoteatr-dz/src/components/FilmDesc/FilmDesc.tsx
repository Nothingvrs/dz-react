import styles from './FilmDesc.module.css';
import FilmCard from '../FilmCard/FilmCard';
import { FilmDescProps } from './FilmDesc.props';

function FilmDesc({ cards }: FilmDescProps) {
		
	return (
		<div className={styles['film-desc']}>
			{cards.map(card => (
					<FilmCard 
					key={card.IMDB_ID} 
					image={card.IMG_POSTER}					 
					titlecard={card.TITLE} 
					favouriteCount={card.RANK}
					imdb_id={card.IMDB_ID}
					isFavourite={card.isFavourite}
				/>
			)
			)}
		</div>
	);
}

export default FilmDesc;
