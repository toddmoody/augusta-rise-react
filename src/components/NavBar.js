import React, { Component } from 'react';
import brandLogo from '../assets/augusta-rise.png'

import { Nav, Navbar, NavItem } from 'react-bootstrap' 

import './css/NavBar.css';

class NavBar extends Component {
  render() {
    return (
    <Navbar collapseOnSelect fixedTop fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <img className="header-logo" src={brandLogo} alt="Augusta Rise" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          
          <Nav pullRight>
            <NavItem className="nav-link" eventKey={1} href="#top">
              Home
            </NavItem>
            <NavItem className="nav-link" eventKey={2} href="#intro">
              Locations
            </NavItem>
            <NavItem className="nav-link" eventKey={2} href="#sections">
            Sections & Covenants
            </NavItem>
            <NavItem className="nav-link" eventKey={2} href="#contact">
            Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
