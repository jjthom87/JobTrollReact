import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from 'routes';
import actions from './actions/index';
var store = require('./store/configureStore').configure();

ReactDOM.render(
    <Router history={browserHistory}>{routes}</Router>,
  document.getElementById('app')
);