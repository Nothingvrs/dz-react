import styles from './Form.module.css';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { formReducer, INITIAL_STATE } from './Form.state';
import { useReducer, useRef, useEffect } from 'react';

function Form({ onSubmit, buttonText, placehldr }) {
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, value, isFormReadyToSubmit } = formState;
	const inputRef = useRef();
	const buttonRef = useRef();
	
	

	const focusError = (isValid) => {
		switch(true) {
		case !isValid.title:
			inputRef.current.focus();
			break;
		case !isValid.date:
			buttonRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		let timerId;
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


	const onChange = (e) => {
		dispatchForm({ type: 'SET_VALUE', payload: e.target.value});
	};

	const addProfile = (e) => {
		e.preventDefault();
		dispatchForm({ type: 'SUBMIT', payload: value});
	};

	return (
		<form className={styles['form']} onSubmit={addProfile}>
			<Input ref={inputRef} onChange={onChange} value={value} placehldr={placehldr} isValid={isValid}/>
			<Button>{buttonText}</Button>
		</form>
	);
}

export default Form;
