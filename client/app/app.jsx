import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import {Provider} from 'react-redux';

import routes from './routes';
var store = require('./store/configureStore').configure();

ReactDOM.render(
	<Provider store={store}>
    	<Router history={browserHistory}>{routes}</Router>
    </Provider>,
  document.getElementById('app')
);