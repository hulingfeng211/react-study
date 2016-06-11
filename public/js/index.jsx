'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route,browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Todo from './components/Todo';



ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" 				component={App}>
      <Route path="/home" 	component={Home}/>
      <Route path="/about" 	component={About}/>
      <Route path="/todo" 	component={Todo}/>
      <Route path="*" 			component={NotFound}/>
    </Route>
  </Router>
), document.getElementById('container'))
