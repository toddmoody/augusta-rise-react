import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import brandLogo from '../assets/augusta-rise.png'
import './css/MainNav.css';


class MainNav extends Component {
    render() {
      return (
        <nav className="nav-flex-wrapper">
        <img src={brandLogo} />
          <ul className="main-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Sections & Covenants</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>  
      );
    }
  }
  
  export default MainNav;