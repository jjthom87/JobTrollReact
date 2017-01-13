import * as types from './types';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

export function createAccount(name, username, password, confirmPassword){
	return {
		type: types.CREATE_USER,
		name,
		username,
		password,
		confirmPassword
	}
};

export function createNewAccount(name, username, password, confirmPassword){
     return function(dispatch){
		dispatch(createAccount(name,username,password,confirmPassword));
		const newUser = {name, username, password, confirmPassword};
		fetch('/api/users/create', {
			method: 'post',
			body: JSON.stringify(newUser),
			headers: {
				'content-type': 'application/json'
			}
		}).then((response) => response.json())
		.then((results) => {
			if(results.createdAt){
				browserHistory.push('/login');
			}
      })
     .catch(response => alert(response));
     return null;
  }
};