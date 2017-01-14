import React, { Component } from 'react';
import LoginForm from './../users/LoginForm';
import { browserHistory } from 'react-router';

export default class LoginPage extends Component {
	render() {
		return (
			<div className="row">
				<div className="column small-centered small-11 medium-6 large-5">
					<div className="container">
						<LoginForm/>
						<p className="animated fadeInDown" id="loginText">If you haven't registered yet</p>
						 	<p className="animated fadeInDown" id="loginText">Please go to the Sign Up Page!</p>
					</div>
				</div>
			</div>
		);
	}
}