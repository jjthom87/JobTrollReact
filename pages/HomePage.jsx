import React, { Component } from 'react';
import { Router , browserHistory } from 'react-router';
var {Link, IndexLink} = require('react-router');
import LandingNavBar from 'LandingNavBar';

export default class HomePage extends React.Component {
  	constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}
	render() {
		
    	return (
      		<div>
      			<LandingNavBar/>
	      		<h1 className="text-center" id="pageTitle">Welcome to JobAppTrack. Please Login or Signup</h1>
      		</div>
		);
	}
}