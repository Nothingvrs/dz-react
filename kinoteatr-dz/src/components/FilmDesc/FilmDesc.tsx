import styles from './FilmDesc.module.css';
import FilmCard from '../FilmCard/FilmCard';
import { FilmDescProps } from './FilmDesc.props'

function FilmDesc({ cards }: FilmDescProps) {

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
