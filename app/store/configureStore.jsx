import redux, { Component } from 'redux';
import { createAccountReducer } from '../reducers/auth_reducer';

export var configure = (initialState = {}) => {
	var reducer = redux.combineReducers({
		createAccount: createAccountReducer
	});

	var store = redux.createStore(reducer, initialState, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
		));

	return store;
}