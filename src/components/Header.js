import React, { Component } from 'react';
import HeaderImg from '../assets/header-img.png';

import './css/Header.css';
import MainNav from './MainNav';

class Header extends Component {
  render() {
    return (
      <section>
        <div className="hero-header overlay">
          <div className="centre-content">
            <img className="header-element" src={HeaderImg} alt="Sections Available Now" />
          </div>
          <a href="#" data-scrollto="#" data-easing="easeInOutExpo" data-speed="1250" data-offset=""><i class="icon-angle-down infinite animated fadeInDown"></i></a>
        </div>
      </section>    
    );
  }
}

export default Header;
