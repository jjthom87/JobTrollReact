import { LOGIN_USER } from './../actions/types/login_types';

export var loginReducer = (state = [], action) => {
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