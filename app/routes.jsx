import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

// REQUIRE COMPONENTS==========================================================
// Parent
import Application from "Application"
// Children
import HomePage from "HomePage";
import CreateAccountPage from 'CreateAccountPage';
import LoginPage from 'LoginPage';
import UserHomePage from 'UserHomePage';

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