import React, { Component } from 'react';
import NavBar from './NavBar';

import HeaderImg from '../assets/header-img.png';

import './css/Header.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import FaChevronDown from '@fortawesome/fontawesome-free-solid/faChevronDown'



class Header extends Component {
  render() {
    return (
      <div>
      <NavBar /> 
      <section id="top" className="hero-header overlay">
        <div className="header-element">
          <img src={HeaderImg} alt="Sections Available Now" />
          <a href="#contact"><button>Contact Us</button></a>
        </div>
        <div className="header-base-nav">
          <a href="#intro" data-scrollto="#" data-easing="easeInOutExpo" data-speed="1250" data-offset=""><FontAwesomeIcon className="bounce" icon={FaChevronDown} size="lg"/></a>
        </div>
      </section>   
      </div> 
    );
  }
}

export default Header;
