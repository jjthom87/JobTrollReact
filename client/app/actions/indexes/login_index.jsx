import * as types from './../types/login_types';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

export function loginForm(username, password){
	return { type: types.LOGIN_USER, username, password }
};

export function loginUser(username, password){
	return function(dispatch){
		dispatch(loginForm(username,password));
		const loginUser = {username, password};
		fetch('/api/users/login', {
			method: 'post',
			body: JSON.stringify(loginUser),
			headers: {
				'Authorization': 'Basic'+btoa('username:password'),
				'content-type': 'application/json',
				'accept': 'application/json'
			},
			credentials: 'include'
		}).then((response) => {
			if (response.statusText === "OK"){
				localStorage.setItem('token', response.headers.get('Auth'));
				browserHistory.push('/userhome');
				response.json();
			}}).catch(response => alert(response));
		return null;
	}
};