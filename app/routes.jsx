import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from 'react-redux';

// REQUIRE COMPONENTS==========================================================
// Parent
import Application from "Application"
// Children
import HomePage from "HomePage";
import CreateAccountPage from 'CreateAccountPage';
import LoginPage from 'LoginPage';
import UserHomePage from 'UserHomePage';

import actions from './actions/index';
var store = require('./store/configureStore').configure();

// COMPONENT ROUTES============================================================
export default (
	<Provider store={store}>
	  	<Router history={browserHistory}>
	  		<Route component={Application}>
		    	<Route path="/" component={HomePage} />
		        <Route path="/register" component={CreateAccountPage} />
		        <Route path="/login" component={LoginPage} />
		        <Route path="/userhome" component={UserHomePage} />
		    </Route>
	  	</Router>
	</Provider>
);