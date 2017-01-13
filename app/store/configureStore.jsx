import redux from 'redux';
var { createAccountReducer } = require('../reducers/auth_reducer');
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

export var configure = (initialState = {}) => {
	// var reducer = redux.combineReducers({
	// 	createAccount: createAccountReducer
	// });

	// var store = redux.createStore(createAccountReducer, initialState, redux.compose(
	// 	window.devToolsExtension ? window.devToolsExtension() : f => f
	// 	));

	const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
	const store = createStoreWithMiddleware(createAccountReducer);

	return store;

}