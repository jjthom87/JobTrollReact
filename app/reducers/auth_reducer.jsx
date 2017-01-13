import {
	CREATE_USER,
	CORRECT_SIGNUP,
	INCORRECT_SIGNUP
} from '../actions/types';
import redux from 'redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

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