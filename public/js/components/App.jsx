'use strict'

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link, Router, Route } from 'react-router';
import {Navbar,NavItem,NavDropdown,MenuItem,Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import Footer from './Footer';
 
const navbarInstance = (
  <Navbar inverse  >
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/home"><a>项目名</a></LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/home"><NavItem eventKey={1} active={true} >Home</NavItem></LinkContainer>
        <LinkContainer to="/foo"><NavItem eventKey={2} >Foo</NavItem></LinkContainer>
        <LinkContainer to="/todo"><NavItem eventKey={2} >Todo List</NavItem></LinkContainer>
        <NavDropdown eventKey={3} title="React练习" id="basic-nav-dropdown">
          <LinkContainer to="/demo1"><MenuItem eventKey={3.1}>Dynamic UIs</MenuItem></LinkContainer>
          <LinkContainer to="/ThumbnailDiv"><MenuItem eventKey={3.2}>ThumbnailDiv</MenuItem></LinkContainer>
          <LinkContainer to="/ControlledCarousel"><MenuItem eventKey={3.3}>ControlledCarousel</MenuItem></LinkContainer>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/about"><NavItem eventKey={1} >About</NavItem></LinkContainer>
        <LinkContainer to="/signin"><NavItem eventKey={2} >Sign In</NavItem></LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
const footer_instance=(
    <Footer/>
  );

class App extends React.Component {  
  render() {
    let div_style={padding:"0px"};
    return (
      
        <div style={div_style}> 
        {navbarInstance}

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
        {footer_instance} 
        </div>
    )
  }
}

// function multiply(a, b) {
//   return a * b;
// }

//export {App, multiply}
export default App