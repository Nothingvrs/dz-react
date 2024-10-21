import { createSlice } from '@reduxjs/toolkit';
import { card } from '../components/FilmDesc/FilmDesc.props';
import { loadState } from './storage';


export interface UserState {
	name: string,
	isLogined: boolean;
	favourites: card[]
}

const initialState: UserState = {
	name: loadState('data').name,
	isLogined: loadState('data').isLogined,
	favourites: loadState('data').favourites
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: (state) => {
				state.name = '',
				state.isLogined = false,
				state.favourites = []
		},
		login: (state, action) => {
				state.name = action.payload.name,
				state.isLogined = action.payload.isLogined,
				state.favourites = action.payload.favourites
		},
		addFavourite: (state, action) => {
			console.log(state.favourites)
			state.favourites.push(action.payload);
		},
		removeFavourite: (state, action) => {
			console.log(state.favourites)
			console.log(action)
			state.favourites.splice(state.favourites.findIndex(item => item.IMDB_ID === action.payload.IMDB_ID), 1);
		},	
	}
});

export default userSlice.reducer;
export const userActions = userSlice.actions;