import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import brandLogo from '../assets/augusta-rise.png'
import './css/MainNav.css';


class MainNav extends Component {
    render() {
      return (
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <img className="aug-logo" src={brandLogo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                HOME
              </NavItem>
              <NavItem eventKey={2} href="#">
                LOCATION
              </NavItem>
              <NavItem eventKey={2} href="#">
              SECTIONS & COVENANTS
              </NavItem>
              <NavItem eventKey={2} href="#">
              CONTACT
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
  
  export default MainNav;