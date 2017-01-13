import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';

import routes from './routes';
import actions from './actions/index';
var store = require('./reducers/auth_reducer').configure();

ReactDOM.render(
	<Provider store={store}>
    	<Router history={browserHistory}>{routes}</Router>
    </Provider>,
  document.getElementById('app')
);