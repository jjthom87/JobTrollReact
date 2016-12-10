import { browserHistory } from 'react-router';
import {
	CORRECT_SIGNUP,
	INCORRECT_SIGNUP,
	CREATE_USER
} from './types';

export function createAccountFunc(name, username, password, confirmPassword) {
	return dispatch => {
		return fetch('/api/users/create', {
			method: 'post',
			body: JSON.stringify({ name, username, password, confirmPassword }),
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
	};
};

export function createAccount(name, username, password, confirmPassword) {
	return {
		type: CREATE_USER,
		name,
		username,
		password,
		confirmPassword
	};
};