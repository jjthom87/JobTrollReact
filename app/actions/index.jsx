import { browserHistory } from 'react-router';
import {
	CORRECT_SIGNUP,
	INCORRECT_SIGNUP,
	CREATE_USER
} from './types';

// export function createUser({name, username, password, confirmPassword, createdOn}){
// 	return {	
// 		const newUser = { name, username, password, confirmPassword, createdOn };
// 		fetch('/api/users/create', {
// 			method: 'post',
// 			body: JSON.stringify(newUser),
// 			headers: {
// 				'content-type': 'application/json'
// 			}
// 		}).then((response) => response.json())
// 		.then((results) => {
// 			if (results.createdAt){
// 				dispatch(validSignup(results.createdAt));
// 				browserHistory.push('/login');
// 			} else {
// 				dispatch(invalidSignup(results.errors));
// 				results.errors.filter((result) => alert('Invalid Signup'));
// 			}
// 		})
// 	}
// }

export var createUser = (name, username, password, confirmPassword) => {
	return {
		type: CREATE_USER,
		name,
		username,
		password,
		confirmPassword
	};
};

export var validSignup = (message) => {
	return {
		type: CORRECT_SIGNUP,
		message
	};
};

export var invalidSignup = (error) => {
	return {
		type: INCORRECT_SIGNUP,
		error
	};
};