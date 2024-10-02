interface card {
		id: React.Key,
		image: string,
		titlecard: string,
		isFavourite: boolean,
		favouriteCount: number
}

export interface FilmDescProps {
	cards: card[]
}