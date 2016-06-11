'use strict'

import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import { Link, Router, Route } from 'react-router'
import {Navbar,NavItem,NavDropdown,MenuItem,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const navbarInstance = (
  <Navbar >
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer to="/"><b>项目名</b></LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to="/home"><NavItem eventKey={1} active={true} >Home</NavItem></LinkContainer>
        <LinkContainer to="/foo"><NavItem eventKey={2} >Foo</NavItem></LinkContainer>
        <LinkContainer to="/todo"><NavItem eventKey={2} >Todo List</NavItem></LinkContainer>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <LinkContainer to="/about"><NavItem eventKey={1} >About</NavItem></LinkContainer>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

class App extends React.Component {  
  render() {
    return (
     <div >
      

         {navbarInstance}

        {/*
          next we replace `<Child>` with `this.props.children`
          the router will figure out the children for us
        */}
        {this.props.children}
      </div> 
    )
  }
}

// function multiply(a, b) {
//   return a * b;
// }

//export {App, multiply}
export default App