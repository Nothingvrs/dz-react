import styles from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { formReducer, INITIAL_STATE } from './Form.state';
import { useReducer, useRef, useEffect, ChangeEvent } from 'react';
import { FormProps } from './Form.props';

function Form({ onSubmit, buttonText, placehldr }: FormProps) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, value, isFormReadyToSubmit } = formState;
	const inputRef = useRef<HTMLInputElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);
	
	

	const focusError = (isValid: boolean) => {
		switch(true) {
		case !isValid:
			inputRef.current?.focus();
			break;
		case !isValid:
			buttonRef.current?.focus();
			break;
		}
	};

	useEffect(() => {
		let timerId: number;
		if (!isValid) {
			focusError(isValid);
			timerId = setTimeout(() => {
				dispatchForm({ type: 'RESET_VALIDITY'});
			}, 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);

	useEffect(() => {
		if (isFormReadyToSubmit) {
			onSubmit(value);
			dispatchForm({ type: 'CLEAN'});
		}
	}, [isFormReadyToSubmit, value, onSubmit]);


	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatchForm({ type: 'SET_VALUE', payload: e.target.value});
	};

	const addProfile = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT', payload: value});
	};

	return (
		<form className={styles['form']} onSubmit={addProfile}>
			<Input img={''} ref={inputRef} onChange={onChange} value={value} placehldr={placehldr} isValid={isValid}/>
			<Button>{buttonText}</Button>
		</form>
	);
}

export default Form;
