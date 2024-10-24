export interface card {
		key: number,
		IMG_POSTER: string,
		TITLE: string,
		isFavourite: boolean,
		RANK: number,
		IMDB_ID: number
}

export interface FilmDescProps {
	cards: card[]
}