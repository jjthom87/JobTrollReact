var { createAccountReducer } = require('../reducers/auth_reducer');
import { createStore, applyMiddleware } from 'redux';
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