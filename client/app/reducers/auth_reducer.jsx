import {
	CREATE_USER,
	LOGIN_USER
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

export var loginReducer = (state = {}, action) => {
	switch(action.type){
		case LOGIN_USER:
			return [
			...state,
				{
					username: action.username,
					password: action.password
				}
			];
		default:
			return state;
	}
}

export var logoutReducer = (state = {}, action) => {
	switch(action.type){
		case LOGIN_USER:
			return [
			...state,
			];
		default:
			return state;
	}
}