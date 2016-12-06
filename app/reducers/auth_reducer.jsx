import {
	CORRECT_SIGNUP,
	INCORRECT_SIGNUP
} from '../actions/types';

export default function(state = {}, action){
	switch(action.type){
		case CORRECT_SIGNUP:
			return {...state, message: action.message, created: true };
		case INCORRECT_SIGNUP:
			return {...state, error: action.error , created: false};
	}
	return state;
}