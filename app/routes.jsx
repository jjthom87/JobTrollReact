import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from 'react-redux';

// REQUIRE COMPONENTS==========================================================
// Parent
import Application from "./components/Application"
// Children
import HomePage from "./../pages/HomePage";
import CreateAccountPage from './../pages/CreateAccountPage';
import LoginPage from './../pages/LoginPage';
import UserHomePage from './../pages/UserHomePage';

import actions from './actions/index';
// var store = require('./store/configureStore').configure();

// COMPONENT ROUTES============================================================
export default (
  	<Router history={browserHistory}>
  		<Route component={Application}>
	    	<Route path="/" component={HomePage} />
	        <Route path="/register" component={CreateAccountPage} />
	        <Route path="/login" component={LoginPage} />
	        <Route path="/userhome" component={UserHomePage} />
	    </Route>
  	</Router>
);