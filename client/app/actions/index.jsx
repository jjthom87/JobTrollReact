import * as types from './types';
import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';

export function createAccountForm(name, username, password, confirmPassword){
	return { type: types.CREATE_USER, name, username, password, confirmPassword }
};

export function createNewAccount(name, username, password, confirmPassword){
     return function(dispatch){
		dispatch(createAccountForm(name,username,password,confirmPassword));
		const newUser = {name, username, password, confirmPassword};
		fetch('/api/users/create', {
			method: 'post',
			body: JSON.stringify(newUser),
			headers: {'content-type': 'application/json'}
		}).then((response) => response.json())
		.then((results) => {
			if(results.createdAt){
				browserHistory.push('/login');
			}}).catch(response => alert(response));
     	return null;
	}
};

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

export function logoutForm(){
	return { type: types.LOGOUT_USER }
};

export function logoutUser(){
	return function(dispatch){
		dispatch(logoutForm())
		fetch('/api/users/logout', {
			method: 'delete',
			headers: {
				Auth: localStorage.getItem('token'),
			},
			credentials: 'include'
		}).then((results) => {
			browserHistory.push('/');
		}).catch(response => alert(response));
		return null;
	}
}