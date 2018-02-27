import React, { Component } from 'react';
import HeaderImg from '../assets/header-img.png';
import brandLogo from '../assets/augusta-rise-dark@2x.png'
import './css/Header.css';
import MainNav from './MainNav';

class Header extends Component {
  render() {
    return (
      <section className="hero-header overlay">
        <nav class="main-nav nav-wrap">
          <img className="brand-logo" src={brandLogo} alt="Augusta Rise" />
            <ul class="nav-ul">
                <li><a href="#">Home</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">Sections & Covenants</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav> 
        <div className="header-element">
          <img src={HeaderImg} alt="Sections Available Now" />
        </div>
        <a href="#" data-scrollto="#" data-easing="easeInOutExpo" data-speed="1250" data-offset=""><i class="icon-angle-down infinite animated fadeInDown"></i></a>
      </section>    
    );
  }
}

export default Header;
