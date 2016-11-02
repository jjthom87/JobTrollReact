var React = require('react');
import Logout from 'Logout';
var {Link, IndexLink} = require('react-router');
import { Router , browserHistory } from 'react-router';

export default class MainNavBar extends React.Component {
    constructor(props, context) {
		super(props, context);
		this.state = {
		};
	}
    logoutHandler(){
		fetch('/api/users/logout', {
			method: 'delete',
			headers: {
				Auth: localStorage.getItem('token'),
			},
			credentials: 'include'
		}).then((results) => {
			browserHistory.push('/');
		});
	}
    render() {
        return (
            <header>
                <nav className="navbar navbar-default navbar-fixed-top clearfix" role="navigation" id="mainNav1">
					<div className="container">
						<div className="collapse navbar-collapse main-nav" id="bubo-main-nav">
							<ul className="nav navbar-nav navbar-right" id="mainNavli">
                                <li className="landNavitem"><Logout onLogout={this.logoutHandler.bind(this)}/></li>
							</ul>
						</div>
					</div>
				</nav>
            </header>
        )
    }
}