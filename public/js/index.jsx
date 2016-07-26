'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route,browserHistory } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Todo from './components/Todo';
import SignIn from './components/SignIn';
import Demo1 from './components/react-demo/Demo1';
import ThumbnailDiv from './components/react-demo/ThumbnailDiv';
import ControlledCarousel from './components/react-demo/ControlledCarousel';

import {Provider} from 'react-redux';
import configureStore from './stores';
import Login from './containers/Login';

const store=configureStore();

{/*<Router history={browserHistory}>
    <Route path="/"         component={App}>
      <Route path="/home"   component={Home}/>
      <Route path="/about"  component={About}/>
      <Route path="/todo"   component={Todo}/>
      <Route path="/signin"   component={SignIn}/>
      <Route path="/Demo1"  component={Demo1}/>
      <Route path="*"       component={Home}/>
    </Route>
  </Router>*/}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/"         component={App}>
      <Route path="/home"   component={Home}/>
      <Route path="/about"  component={About}/>
      <Route path="/todo"   component={Todo}/>
      <Route path="/signin"   component={SignIn}/>
      <Route path="/Demo1"  component={Demo1}/>
      <Route path="/ThumbnailDiv"  component={ThumbnailDiv}/>
      <Route path="/ControlledCarousel"  component={ControlledCarousel}/>
      <Route path="*"       component={Home}/>
    </Route>
  </Router>
  
), document.getElementById('container'))
