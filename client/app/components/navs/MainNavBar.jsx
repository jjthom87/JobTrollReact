import React, {Component} from 'react';
import LogoutForm from './../users/LogoutForm';
import { browserHistory } from 'react-router';

export default class MainNavBar extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-default navbar-fixed-top clearfix" role="navigation" id="mainNav1">
					<div className="container">
						<div className="collapse navbar-collapse main-nav" id="bubo-main-nav">
							<ul className="nav navbar-nav navbar-right" id="mainNavli">
                                <li className="landNavitem"><LogoutForm/></li>
							</ul>
						</div>
					</div>
				</nav>
            </header>
        )
    }
}