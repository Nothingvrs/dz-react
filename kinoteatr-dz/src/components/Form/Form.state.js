export const INITIAL_STATE = {
	isValid: true,
	value: '',
	isFormReadyToSubmit: false
};

export function formReducer(state, action){
	switch(action.type) {
	case 'SET_VALUE':
		return { ...state, value: action.payload };
	case 'RESET_VALIDITY':
		return { ...state, isValid: INITIAL_STATE.isValid};
	case 'SUBMIT': {
		const inputValidity = (action.payload.trim().length !== 0);
		
		return {
			isValid: inputValidity,
			value: action.payload,
			isFormReadyToSubmit:  inputValidity
		};
	}
	case 'CLEAN': 
		return { ...state, value: INITIAL_STATE.value, isFormReadyToSubmit: false};
	}
}