import React, { Component } from 'react';
import NavBar from './NavBar';

import HeaderImg from '../assets/header-img.png';
import brandLogo from '../assets/augusta-rise-dark@2x.png'

import './css/Header.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import FaChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown'



class Header extends Component {
  render() {
    return (
      <div>
      <NavBar /> 
      <section className="hero-header overlay">
      
      {/*
        <nav className="main-nav nav-wrap">
          <img className="brand-logo" src={brandLogo} alt="Augusta Rise" />
            <ul className="nav-ul">
                <li><a href="#">Home</a></li>
                <li><a href="#intro">Location</a></li>
                <li><a href="#sections">Sections & Covenants</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
      */} 
        
        <div className="header-element">
          <img src={HeaderImg} alt="Sections Available Now" />
          <a href="#contact"><button>Contact Us</button></a>
        </div>
        <div className="header-base-nav">
          <a href="#intro" data-scrollto="#" data-easing="easeInOutExpo" data-speed="1250" data-offset=""><FontAwesomeIcon className="header-icon" icon={FaChevronDown} size="lg"/></a>
        </div>
      </section>   
      </div> 
    );
  }
}

export default Header;
