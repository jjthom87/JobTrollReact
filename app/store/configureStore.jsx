import redux from 'redux';
var { createAccountReducer } = require('../reducers/auth_reducer');

export var configure = preloadedState => {
	// var reducer = redux.combineReducers({
	// 	createAccount: createAccountReducer
	// });

	var store = redux.createStore(createAccountReducer, preloadedState, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
		));
	return store;
}