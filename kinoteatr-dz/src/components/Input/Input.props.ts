import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	img?: string,
	placehldr: string,
	isValid: boolean,
	value: string
}