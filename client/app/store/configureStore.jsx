import { createAccountReducer } from '../reducers/create_account_reducer'; 
import { loginReducer } from '../reducers/login_reducer'; 
import { logoutReducer } from '../reducers/logout_reducer'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

export var configure = (initialState = {}) => {
	var reducers = combineReducers({
		createAccount: createAccountReducer,
		login: loginReducer,
		logout: logoutReducer
	});

	const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
	const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

	return store;
}