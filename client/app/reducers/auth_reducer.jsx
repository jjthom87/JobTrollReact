import {
	CREATE_USER,
	CORRECT_SIGNUP,
	INCORRECT_SIGNUP
} from '../actions/types';

export var createAccountReducer = (state = {}, action) => {
	switch(action.type){
		case CREATE_USER:
			return [
			...state,
				{
					name: action.name,
					username: action.username,
					password: action.password,
					confirmPassword: action.confirmPassword
				}
			];
		default:
			return state;
	}
}