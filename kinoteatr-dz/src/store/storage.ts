import { UserState } from './user.slice';

const defaultState = {
		name: '', 
		isLogined: true, 
		favourites: []
	}

export function loadState(key: string): UserState {
	try {
		const jsonState = localStorage.getItem(key);
		if (!jsonState) {
			localStorage.setItem(key, JSON.stringify(defaultState))
			return defaultState;
		}
		return JSON.parse(jsonState);
	} catch (e) {
		console.error(e);
		return defaultState;
	}
}

export function saveState<T>(state: T, key: string) {
	const stringState = JSON.stringify(state);
	localStorage.setItem(key, stringState);
}