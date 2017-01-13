import React, { Component } from 'react';
import CreateAccount from '../app/components/users/CreateAccount';
import { Router , browserHistory } from 'react-router';
var moment = require('moment');

import LandingNavBar from '../app/components/navs/LandingNavBar';

export default class CreateAccountPage extends React.Component {
	render() {
		return (
			<div>
				<LandingNavBar/>
				<div className = "row">
					<div className="column small-centered small-11 medium-6 large-5 regdiv">
						<div className="container" id="regdiv">
							<CreateAccount/>
							<p className="animated fadeInDown" id="loginText">Already have an account? Please login</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}