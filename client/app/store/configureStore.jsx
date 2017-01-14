import { 
	createAccountReducer, 
	loginReducer,
	logoutReducer
} from '../reducers/auth_reducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';

export var configure = (initialState = {}) => {
	var reducers = combineReducers({
		createAccount: createAccountReducer,
		login: loginReducer,
		logout: logoutReducer
	});

	const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
	const store = createStoreWithMiddleware(reducers);

	return store;
}