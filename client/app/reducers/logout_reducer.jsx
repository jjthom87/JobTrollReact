import { LOGOUT_USER } from './../actions/types/logout_types';

export var logoutReducer = (state = {}, action) => {
	switch(action.type){
		case LOGOUT_USER:
			return [
			...state,
			];
		default:
			return state;
	}
}