import * as types from './../types/login_types';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

export function loginForm(loginUser){
	return { type: types.LOGIN_USER, loginUser}
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
			try{
				if (response.statusText === "OK"){
					localStorage.setItem('token', response.headers.get('Auth'));
					browserHistory.push('/userhome');
				} else {
					throw "Incorrect Login Credentials";
				}
			}
			catch(err){
				alert(err);
			}
		});
		return null;
	}
};