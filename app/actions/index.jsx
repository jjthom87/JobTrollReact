import { browserHistory } from 'react-router';
import {
	CORRECT_SIGNUP,
	INCORRECT_SIGNUP
} from '.types';

export function createUser({name, username, password, confirmPassword, createdOn}){
	return function(dispatch){	
		const newUser = { name, username, password, confirmPassword, createdOn };
		fetch('/api/users/create', {
			method: 'post',
			body: JSON.stringify(newUser),
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
		.then((results) => {
			if (results.createdAt){
				dispatch(validSignup(results.createdAt));
				browserHistory.push('/login');
			} else {
				dispatch(invalidSignup(results.errors));
				results.errors.filter((result) => alert('Invalid Signup'));
			}
		})
	}
}

export function validSignup(message){
	return {
		type: CORRECT_SIGNUP,
		message: message
	}
}

export function invalidSignup(error){
	return {
		type: INCORRECT_SIGNUP,
		error: error
	}
}