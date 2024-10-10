import { useState, useEffect } from 'react';
import { useLocalStorageProps, dataProps } from './use-localstorage.props'

export function useLocalStorage (key: string): useLocalStorageProps {
	const [data, setData] = useState<dataProps>([]);

	useEffect(() => {
		const item: string = localStorage.getItem(key)!;
		if (item) {
			const res = JSON.parse(item);
			setData(res);
		}
	}, []);

	const saveData = (newData: dataProps) => {
		localStorage.setItem(key, JSON.stringify(newData));
		setData(newData);
	};
	
	return [data, saveData];
}