import React, { Component } from 'react';
import HeaderImg from '../assets/header-img.png';
import './css/Header.css';
import MainNav from './MainNav';

class Header extends Component {
  render() {
    return (
      <section className="hero-header overlay">
        <div className="main-nav">This is my header that I need at the top</div>
        <div className="header-element">
          <img src={HeaderImg} alt="Sections Available Now" />
        </div>
        <a href="#" data-scrollto="#" data-easing="easeInOutExpo" data-speed="1250" data-offset=""><i class="icon-angle-down infinite animated fadeInDown"></i></a>
      </section>    
    );
  }
}

export default Header;
