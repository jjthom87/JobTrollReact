import { browserHistory } from 'react-router';
import {
	CREATE_USER,
	CORRECT_SIGNUP,
	INCORRECT_SIGNUP
} from '../actions/types';

export var createAccountReducer = (state = {}, action) => {
	switch(action.type){
		case CREATE_USER:
			return {
				...state,
				name: action.name,
				username: action.username,
				password: action.password,
				confirmPassword: action.confirmPassword
			}
		case CORRECT_SIGNUP:
			return {...state, message: action.message, created: true };
		case INCORRECT_SIGNUP:
			return {...state, error: action.error , created: false};
		default:
			return state;
	}
}