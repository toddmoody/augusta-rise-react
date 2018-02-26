import React, { Component } from 'react';
import HeaderImg from '../assets/header-img.png';
// import './App.css';

class Header extends Component {
  render() {
    return (
      <section className="hero-header">
        <div className="centre-content">
          <img src={HeaderImg} alt="Sections Available Now" />
        </div>
      </section>    
    );
  }
}

export default Header;
