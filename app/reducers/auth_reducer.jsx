import { browserHistory } from 'react-router';
import {
	CORRECT_SIGNUP,
	INCORRECT_SIGNUP
} from '../actions/types';

export var createAccountReducer = (state = {}, action) => {
	switch(action.type){
		case CREATE_USER:
			return {
				fetch("/api/users/create", {
					method: 'post',
					body: JSON.stringify({					
						name: action.name, 
						username: action.username, 
						password: action.password, 
						confirmPassword: action.confirmPassword
					}),
					headers: {
						'content-type': 'application/json'
					}
				}).then((response) => response.json())
				.then((results) => {
					if (results.createdAt){
						browserHistory.push('/login');
					} else {
						results.errors.filter((result) => alert('Invalid Signup'));
					}
				})
			};
		case CORRECT_SIGNUP:
			return {...state, message: action.message, created: true };
		case INCORRECT_SIGNUP:
			return {...state, error: action.error , created: false};
		default:
			return state;
	}
}