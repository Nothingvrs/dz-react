interface newDataProps {
		isLogined: boolean,
		name: string
	}

export type dataProps = newDataProps[]

export type useLocalStorageProps = 
[
	data: dataProps, 
	saveData: (newData: dataProps) => void
]